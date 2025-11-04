  import React from 'react'
  import Nav from './../components/Nav';
  import { PROBLEMS } from '../data/problem';
import {  ArrowRight, Code2Icon } from 'lucide-react';
import { Link } from 'react-router';

const difficultyColors = {
  "Easy": "bg-green-400",
  "Medium": "bg-yellow-400",
  "Hard": "bg-red-400",
}
  function ProblemPage() {
    const problems = Object.values(PROBLEMS)
    console.log(problems)
    return (
      <div className="max-w-[1440px] mx-auto my-0 p-0">
        <Nav />
        <div className='w-full flex flex-col justify-around items-start px-2 md:px-20'>
            <div className='mt-10'>
              <h1 className='text-3xl md:text-5xl font-semibold '>Practice Problems</h1>
              <p className='text-md md:text-2xl text-gray-800'>Sharpen your coding skills with these curated problems</p>
            </div>
            <div className='w-full flex flex-col justify-around items-start'> 

             {
              problems.map(ele=>{
                console.log(difficultyColors[ele.description])
                return(
                   <div key={ele.id} className='flex justify-between items-start my-5 bg-linear-90 from-whiet via-green-100 to-green-100 pr-2 py-4 w-full'>
                <div className='flex-1 '>
                    <div className='flex gap-5 items-center justify-start'> 
                        <div className='bg-green-300 p-2 rounded-xl '>
                      <Code2Icon className='inline-block ' size={35}/>
                        </div>
                      <div>
                        <div>
                          <h2 className='inline-block text-2xl font-bold'>{ele.title}</h2> <span className={`px-2 py-1 text-white text-md rounded-2xl ${difficultyColors[ele.difficulty]}`}> {ele.difficulty}</span>
                        </div>
                        <p className='text-gray-500'>{ele.category}</p>
                      </div>
                    </div>
                      <p className=''>{ele.description.text}</p>

                </div>
                <div className='flex '>
                  <Link className="flex" to={`/problem/${ele.id}`}>
                    Solve <ArrowRight className='inline-block'/>
                  </Link>
                </div>
              </div>
                )
              })
             }

            </div>
        </div>
      </div>
    )
  }

  export default ProblemPage