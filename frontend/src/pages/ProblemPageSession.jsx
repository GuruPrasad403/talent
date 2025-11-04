import React from 'react'
import { useParams } from 'react-router'
import { PROBLEMS } from '../data/problem';
import Nav from '../components/Nav';

function ProblemPageSession() {
    const {problemTtitle} = useParams();
    const problem = Object.values(PROBLEMS).filter(ele => ele.id === problemTtitle)    
    console.log(problem[0].id)
  return (
    <div className="max-w-[1440px] mx-auto my-0 p-0">
        <Nav />
        ProblemPageSession
        <h1>{problemTtitle}</h1>
    </div>
  )
}

export default ProblemPageSession