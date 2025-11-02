import { Inngest} from 'inngest'
import connectToDB from "../config/db.js"
import UserModel from '../models/User.js'

export const inngest =  new Inngest({id : "talent"});

const syncUser = inngest.createFunction({
    id:"sync-user"
}, 
{event : "'clerk/user.created"},
async ({event})=>{
    await connectToDB();

    const {id,first_name,email_addresses,last_name,image_url} = event.data;
    const newUser = {
        clerkId : id,
        name : `{${first_name ?? ""} ${last_name ??""}}`,
        email : email_addresses[0]?.email_address,
        profileImage : image_url
    }
    await UserModel.create(newUser)
}
);
const deleteUserFromDB = inngest.createFunction({
    id:"delete-user"
}, 
{event : "'clerk/user.deleted"},
async ({event})=>{
    await connectToDB();

    const {id} = event.data;
   
    await UserModel.findOneAndDelete({clerkId : id})
}
);

export const functions = [syncUser,deleteUserFromDB]