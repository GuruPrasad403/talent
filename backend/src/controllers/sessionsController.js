import mongoose from 'mongoose';
import Session from '../models/Session.js';
import {chatClient, streamClient} from '../config/stream.js';

export async function createSession (req, res, next) {
  try {
    const {problem, difficulty} = req.body;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    if (!userId || !clerkId)
      return res.status (401).json ({msg: 'User Id and clerk Id missing'});
    // creating an unique call id for the stream
    const callId = `Session_${Date.now ()}_${Math.random ()
      .toString (36)
      .substring (7)}`;
    // creating session
    const session = await Session.create ({
      problem,
      difficulty,
      host: userId,
      callId,
    });
    // creating steam video call
    await streamClient.video.call ('default', callId).getOrCreate ({
      data: {
        created_by_id: clerkId,
        custom: {problem, difficulty, sessionId: session._id.toString ()},
      },
    });
    // chat messageing
    const channel = chatClient.channel ('messaging', callId, {
      name: `${problem} Session`,
      created_by_id: clerkId,
    });
    await channel.create ();

    res.status (201).json ({msg: 'Session Created', session});
  } catch (error) {
    console.log ('Error in Session Router', error);
    res.status (500).json ({msg: 'Server Down, please try after some'});
  }
}
export async function getMyActiveSessions (req, res, next) {
  try {
    // find all the active sessions in the database
    const sessions = await Session.find ({status: 'active'})
      .populate ('host', 'name email profileImage clerkId')
      .sort ({createdAt: -1})
      .limit (20);
    res.status (200).json ({msg: 'Sessions Retrived', sessions});
  } catch (error) {
    console.log ('Error in Session Router', error);
    res.status (500).json ({msg: 'Server Down, please try after some'});
  }
}
export async function getMyRecentSessions (req, res, next) {
  try {
    // get sessions where user is either host or participant
    const session = await Session.find ({
      status: 'completed',
      $or: [{host: userId}, {participant: userId}],
    })
      .sort ({createdAt: -1})
      .limit (20);
    res.status (200).json ({msg: 'Session Retrived', session});
  } catch (error) {
    console.log ('Error in Session Router', error);
    res.status (500).json ({msg: 'Server Down, please try after some'});
  }
}
export async function getSessionById (req, res, next) {
  try {
    // get the sessions based on the id 
    const sessions = await Session.findById({_id : req.params.id}).populate("host", "name email profileImage clerkId").populate("participant" ,"name profileImage clerkId");
    if(!sessions) return res.status(404).json({msg : "No session found"})
    return res.status(200).json({msg : "Session Retrived", sessions})
  } catch (error) {
    console.log ('Error in Session Router', error);
    res.status (500).json ({msg: 'Server Down, please try after some'});
  }
}
export async function joinSession (req, res, next) {
  try {
    const {id} = req.params;
    const userId = req.user._id;
    const {clerkId} = req.user.clerkId;

    // find the seesion based on id 
    const session = await Session.findById({_id : id} );
    if(!session) return res.status(404).json({msg : "No session found"})
    
        // check weather the session is full or not 
        if(session.participant) return res.status(404).json({msg :"Session is full, Try later"});
        session.participant = userId;

        // add the user to the stream 

        const channel = chatClient.channel("messaging",session.callId);
        channel.addMembers([clerkId]);

        res.status(201).json({msg :"Session Joined", session});

            
  } catch (error) {
    console.log ('Error in Session Router', error);
    res.status (500).json ({msg: 'Server Down, please try after some'});
  }
}
export async function endSession (req, res, next) {
  try {
    const {id} = req.params;
    const userid = req.user._id;
    const clerkId = req.user.clerkId;

    const session = await Session.findById({_id : id});
    if(!session) return res.status(404).json({msg : "No session found"})
    // check if the user is host or not 
    if(!session.host.toString() === userid){
        return res.status(403).json({msg :"You don't have access to end session"})
    }
    // check if the session is already completed or not 
    if(session.status === "completed"){
        return res.status(400).json({msg :"Session already completed"})
    }

    session.status = "completed"
    await session.save();

    // terminate video and chat 
    const call = streamClient.video.call("default", session.callId)
    await call.delete({hard : true});

    const channel = chatClient.channel("messaging", session.callId);
    await channel.delete()

    res.status(200).json({msg :"Session ended"})
  } catch (error) {
    console.log ('Error in Session Router', error);
    res.status (500).json ({msg: 'Server Down, please try after some'});
  }
}
