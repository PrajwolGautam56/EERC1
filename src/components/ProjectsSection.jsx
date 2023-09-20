// Inside ProjectsSection.js
import React from 'react';

const ProjectsSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      

          {/* Project Card 2 (level up) */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-8 md:-mt-16">
            <img
              src="project2-image.jpg"
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Project Title 1
              </h3>
              <p className="text-gray-600">
                Description of Project 1.
              </p>
            </div>
          </div>

              {/* Project Card 1 (level down) */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="project1-image.jpg"
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Project Title 2
              </h3>
              <p className="text-gray-600">
                Description of Project 2.
              </p>
            </div>
          </div>

          {/* Project Card 3 (level down) */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-8">
            <img
              src="project3-image.jpg"
              alt="Project 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Project Title 3
              </h3>
              <p className="text-gray-600">
                Description of Project 3.
              </p>
            </div>
          </div>

          {/* Add more alternating project cards as needed */}


              {/* Project Card 1 (level down) */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="project1-image.jpg"
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Project Title 1
              </h3>
              <p className="text-gray-600">
                Description of Project 1.
              </p>
            </div>
          </div>



          
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
