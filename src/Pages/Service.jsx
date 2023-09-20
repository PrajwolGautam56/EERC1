// Inside ServicesSection.js
import React from 'react';
import ServicesData from "./Services.json";
import ServiceDetail from './ServiceDetail';

 

const Service = () => {
    const data= ServicesData.services;
   
    return(
    <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8">
                 Our Services
               </h2>
               
     {data.map((service)=>{
            <>
            {console.log(service.serviceId)}
            {console.log(service.heading)}
          <div key={service.serviceId}>
          <h2> K xa hau K xa halkhabar </h2>
        
       <p>{service.description}</p> 
        </div>
        </>}  ) 
               
     }

    </div>
    </section>
    )
    //
    //    
    //     return (
    //         
    //             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    //               {/* Service Card 1 */}
    //               <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl overflow-hidden flex flex-col md:flex-row transform transition-transform hover:scale-105">
    //                 <div className="p-4 flex-1">
    //                   <h3 className="flex items-center text-xl font-semibold text-black mb-2">
    //                     <i className="mr-2 fas fa-wrench"></i>Environmental Assessments and Geology
        
        
    //                   </h3>
    //                   <p className="text-back-200">
    //                   BES, IEE, EIA, SIA, SEA, Environmental Auditing, MP preparation, Geological and Geo hazard Assessments.
        
    //                   </p>
    //                 </div>
    //                 <div className="p-4">
    //                   <div className="relative">
    //                     <img
    //                       src="../../public/images/services/1.png"
    //                       alt="Service 1"
    //                       className="w-20 h-20 object-cover rounded-full"
    //                     />
    //                   </div>
    //                 </div>
    //               </div>
        
    //               {/* Service Card 2 */}
    //               <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl overflow-hidden flex flex-col md:flex-row transform transition-transform hover:scale-105">
    //                 <div className="p-4 flex-1">
    //                   <h3 className="flex items-center text-xl font-semibold text-black mb-2">
    //                     <i className="mr-2 fas fa-paint-brush"></i> Development Planning
    //                   </h3>
    //                   <p className="text-black-200">
    //                   Tourism Development Plan, Periodic Development Plan, Water Use Master Plan, Solid Waste Assessment and Management Plan, WASH Plans, Local level Plans focusing on LISA guideline of MoFAGA.
    //                    </p>
    //                 </div>
    //                 <div className="p-4">
    //                   <div className="relative">
    //                     <img
    //                       src="../../public/images/services/5.png"
    //                       alt="Service 2"
    //                       className="w-30 h-30 object-cover rounded-full"
    //                     />
    //                   </div>
    //                 </div>
    //               </div>
        
        
        
        
        
                  
        
        
                
        
        
        
    //             </div>
    //           </div>
    //         </section>
    //       );
        
        
    // })
  };

export default Service;
