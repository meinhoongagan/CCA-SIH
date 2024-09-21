import React from 'react'
import LoginCard from '../components/LoginCard'
const Login = () => {
  return (
    <div className='w-screen h-screen bg-green-500 flex'>
      <div className='bg-[#D3E0EA] w-[50%] flex justify-center items-center'><LoginCard/></div>
      <div className='w-[50%] h-screen  bg-[#FFF5E4] flex flex-col justify-around items-center'>
      <h1 className='text-5xl font-serif flex gap-5'>Get Set Go<span><img src='./airplane.png' className='h-[3rem]'></img></span></h1>
      <img src='./boy1.png'></img>
      <div><br/></div>
      </div>
    </div>
  )
}

export default Login
