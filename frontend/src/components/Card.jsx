import React from 'react'
import Button from './button';

const Card = ({header,content}) => {

  return (
    <>
    <div className=" relative w-[30%] h-[80%] mx-auto bg-white border-2 border-[#0098e4] rounded-[2rem] shadow-md p-4 max-sm:w-4/5 max-sm:h-64 mt-8 mb-8 ">
      {/* <!-- Header --> */}
  <div class="flex justify-center items-center ">
    <h2 class="text-xl font-semibold text-left">{header}</h2>
  </div>

      {/* <!-- Horizontal line --> */}
  <hr class="border-blue-500 my-4"/>

      {/* <!-- Main Content --> */}
  <div class="text-gray-700 ">
    <p class="mb-4 pt-0 p-9 font-medium">{content}
     </p>

    {/* <!-- Read More --> */}
    {/* <a href="#" class="text-blue-600 hover:underline">Read more</a> */}
    
    </div>

    {/* <!-- Button with shadow --> */}
    <div className="mt-4">
      <Button className="CourseCard">
        Explore
      </Button>
        </div>
        </div>
        {/* </div> */}
    </>
  )
}

export default Card


{/* <LoremIpsum avgSentencesPerParagraph={2} avgWordsPerSentence={8} random={false} */}