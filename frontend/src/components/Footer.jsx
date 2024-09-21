import React from 'react'

const Footer = () => {
  return (
    <div id="footer" className='w-screen p-8 bg-blue-50'>
      <footer className="bg-blue-50 text-gray-800 py-10 mx-6">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* <!-- Column 1: iDreamCareer Info --> */}
    <div>
      <h2 class="text-lg font-bold mb-4">CareerCampus</h2>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-blue-600">About Us</a></li>
        <li><a href="#" class="hover:text-blue-600">Our Team</a></li>
        <li><a href="#" class="hover:text-blue-600">Contact Us</a></li>
      </ul>
      
      {/* <!-- Video --> */}
      <div class="mt-6">
        <iframe width="40%" height="100" src="https://www.youtube.com/embed/your-video-link" frameborder="0" allowfullscreen></iframe>
      </div>

      {/* <!-- Social Icons --> */}
      <div class="mt-6">
        <h3 class="text-lg font-bold mb-2">Socials</h3>
        <div class="flex space-x-4">
          <a href="#" class="text-blue-500"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-blue-500"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-blue-500"><i class="fab fa-youtube"></i></a>
          <a href="#" class="text-blue-500"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>

      {/* <!-- Contact Button --> */}
      <div class="mt-6">
        <button class="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg">
          <i class="fas fa-phone-alt mr-2"></i> 09555990000
        </button>
      </div>
    </div>

    {/* <!-- Column 2: Students & Parents --> */}
    <div>
      <h2 class="text-lg font-bold mb-4">Students & Parents</h2>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-blue-600">9th & 10th Students</a></li>
        <li><a href="#" class="hover:text-blue-600">11th & 12th Students</a></li>
        <li><a href="#" class="hover:text-blue-600">Undergraduate</a></li>
        <li><a href="#" class="hover:text-blue-600">Liberal arts in India</a></li>
        <h3 class="text-lg font-bold mt-4">Study Abroad</h3>
        <li><a href="#" class="hover:text-blue-600">Guidance Program</a></li>
        <li><a href="#" class="hover:text-blue-600">Study in USA</a></li>
        <li><a href="#" class="hover:text-blue-600">Study in UK</a></li>
        <li><a href="#" class="hover:text-blue-600">Study in Canada</a></li>
        <li><a href="#" class="hover:text-blue-600">Study in Australia</a></li>
      </ul>
    </div>

    {/* <!-- Column 3: Partnerships & Legal --> */}
    <div>
      <h2 class="text-lg font-bold mb-4">Partnerships</h2>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-blue-600">Corporate- CSR</a></li>
        <li><a href="#" class="hover:text-blue-600">Private Schools</a></li>
        <li><a href="#" class="hover:text-blue-600">Counsellor</a></li>
      </ul>

      <h3 class="text-lg font-bold mt-4">Legal</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-blue-600">Refund Policy</a></li>
        <li><a href="#" class="hover:text-blue-600">Terms & Conditions</a></li>
        <li><a href="#" class="hover:text-blue-600">Privacy Policy</a></li>
      </ul>
    </div>

    {/* <!-- Column 4: Resources & Reports --> */}
    <div>
      <h2 className="text-lg font-bold mb-4">Resources</h2>
      <ul className="space-y-2">
        <li><a href="#" classname="hover:text-blue-600">College Admission Update</a></li>
        <li><a href="#" classname="hover:text-blue-600">Explore Blogs</a></li>
        <li><a href="#" classname="hover:text-blue-600">Explore Careers</a></li>
        <li><a href="#" classname="hover:text-blue-600">Explore Exams</a></li>
        <li><a href="#" classname="hover:text-blue-600">Explore Hobby</a></li>
        {/* <li><a href="#" classname="hover:text-blue-600">iDreamCareer App</a></li> */}
        <li><a href="#" classname="hover:text-blue-600">Case Study</a></li>
      </ul>

      <h3 className="text-lg font-bold mt-4">Reports</h3>
      <ul className="space-y-2">
        <li><a href="#" classname="hover:text-blue-600">Career Report 2021</a></li>
        <li><a href="#" classname="hover:text-blue-600">Bharat Career Aspirations Report</a></li>
      </ul>
    </div>
  </div>

  <div className="text-center text-sm text-gray-500 mt-10">
    Copyright - Career-Campus Pvt Ltd. All Rights Reserved
  </div>
</footer>

     </div>
  )
}

export default Footer;
