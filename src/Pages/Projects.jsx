import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Project = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Our Projects
        </h2>
        {/* Inside ProjectSection.js */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">




  {/* Project Card 1 */}
  <div data-aos="fade-up"  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
 

    <img
      src="project1-image.jpg"
      alt="Project 1"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
    <h3 className="text-2xl font-bold text-gray-900  mb-2 transform transition-transform hover:scale-105">

    <span className="mr-2">&#123218;</span>Project 1
      </h3>
      <p className="text-gray-600">
        Description of Project 1.
      </p>
    </div>
    
  </div>

  {/* Add more project cards */}








  {/* Project Card 2 */}
  <div data-aos="fade-up" className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
    <img
      src="project1-image.jpg"
      alt="Project 2"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
    <h3 className="text-xl font-semibold text-gray-800 mb-2 transform transition-transform hover:scale-105">

        Project 2
      </h3>
      <p className="text-gray-600">
        Description of Project 2.
      </p>
    </div>
  </div>

  {/* Add more project cards */}


  {/* Project Card 3 */}
  {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">

    <img
      src="project1-image.jpg"
      alt="Project 3"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
    <h3 className="text-xl font-semibold text-gray-800 mb-2 transform transition-transform hover:scale-105">

        Project 3
      </h3>
      <p className="text-gray-600">
        Description of Project 3.
      </p>
    </div>
  </div> */}

  {/* Add more project cards */}


  {/* Project Card 4 */}
  {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">

    <img
      src="project1-image.jpg"
      alt="Project 4"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
    <h3 className="text-xl font-semibold text-gray-800 mb-2 transform transition-transform hover:scale-105">

        Project 4
      </h3>
      <p className="text-gray-600">
        Description of Project 4.
      </p>
    </div>
  </div> */}

  {/* Add more project cards */}
  {/* Project Card 5 */}
  {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">

    <img
      src="project1-image.jpg"
      alt="Project 5"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
    <h3 className="text-xl font-semibold text-gray-800 mb-2 transform transition-transform hover:scale-105">

        Project 5
      </h3>
      <p className="text-gray-600">
        Description of Project 5.
      </p>
    </div>
  </div> */}

  {/* Add more project cards */}

  {/* Project Card 6 */}
  {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">

  
    <img
      src="project1-image.jpg"
      alt="Project 6"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
    <h3 className="text-xl font-semibold text-gray-800 mb-2 transform transition-transform hover:scale-105">

        Project 6
      </h3>
      <p className="text-gray-600">
        Description of Project 6.
      </p>
    </div>
  </div> */}

  {/* Add more project cards */}
</div>

      </div>
    </section>
  );
};

export default Project;