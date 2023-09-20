import React from 'react';
import ServicesData from "./Services.json";

function ServiceDetail() {
    const data= ServicesData.services;
    console.log(ServicesData.services);
    console.log(data[0].serviceId)
    data.map((service)=>{
        return(
            <>
            {console.log(service.serviceId)}
            {console.log(service.heading)}
          <div key={service.serviceId}>
          <h2> K xa hau K xa halkhabar </h2>
        
       <p>{service.description}</p> 
        </div>
        </>

        )
    })
}

export default ServiceDetail;
