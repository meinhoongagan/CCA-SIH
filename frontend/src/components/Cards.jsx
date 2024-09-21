import React from 'react'
import Card from './Card'
const Cards = () => {

  return (
    
    <div className='w-screen h-[40vw] bg-gradient-to-t from-customBlue to-customWhite flex flex-col items-center gap-0'>

    <h1 className="font-serif text-5xl font-medium bg-transparent mt-8">Analyse Your Self</h1>

    <div className=' w-screen h-[100vh] flex items-center overflow-x-hidden max-sm:flex-col max-sm:gap-2 '>
    
    <Card header={"Personality quiz"} content={"Unlock Your Potential! Discover your strengths with our quick Personality Test. Get personalized insights to guide your career path.Take the test now"}/>

    <Card header={"Skills assessment"} content={"Identify Your Strengths! Take our Skill Assessment to uncover your top abilities.Gain insights to boost your career growth.Start the assessment today!"}/>
    
    <Card header={"Interest inventory"} content={"Explore Your Passions!Discover the careers that align with your interests.Take our Interest Inventory and find your perfect match.Begin your journey now!"}/>
    
    </div>
    
    </div>
  )
}

export default Cards


// {/* <div class="relative w-64 h-64">  border border-transparent border-t-white/40 shadow-[0px_-10px_5px_#f4f9ff] linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)
// {/* <!-- Card 1 --> */}
// <div class="absolute top-0 left-0 w-full h-full bg-blue-500 text-white p-4 rounded-lg shadow-lg">
//   <h2 class="text-lg font-bold">Card 1</h2>
//   <p>This is the first card.</p>
// </div>

// {/* <!-- Card 2 --> */}
// <div class="absolute top-[100%] left-0 w-full h-full bg-green-500 text-white p-4 rounded-lg shadow-lg">
//   <h2 class="text-lg font-bold">Card 2</h2>
//   <p>This is the second card on top of the first card.</p>
// </div>
// </div> */}
