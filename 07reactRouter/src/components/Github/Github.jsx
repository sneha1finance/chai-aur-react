import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() { 
    // we need to use this hooks
    const data = useLoaderData(); // which give all data's which are return  => optimised way
    // const [data , setData] = useState([])
    // // we want to call api on page load hence using useEffect => pagemount
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data)
    //         setData(data)
           
    //     })
    // })
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github Follwers : {data.followers}
    <img src={data.avatar_url} alt='git picture' width={300}/>
    </div>
  )
}

export default Github

// now will do in optimized way by using loader
export const githubInfoloader = async ()=>{
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json();
}