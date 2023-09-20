import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from 'flowbite-react'; 

 import { AiFillCalendar } from "react-icons/ai";
 import { VscServerEnvironment } from "react-icons/vsc";
 import { MdEngineering } from "react-icons/md";
 import { BiSolidPlanet } from "react-icons/bi";
 import { FaWatchmanMonitoring } from "react-icons/fa";
 import { FaLayerGroup } from "react-icons/fa6";

 

 

 


 
 
AOS.init();
function Services() {
  return (
    <>
    <div className='section'>
      <div className='title py-4 font-extrabold text-7xl  tracking-wide '>
        <h1> Our Services</h1>
        
      </div>

      <div className=' mt-10 grid max-w-lg grid-cols-2 items-center gap-x-1 gap-y-6 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-2' >

      
        <div className='card backdrop-blur-xl bg-white/30 '>
          <div className='icon'>
              <VscServerEnvironment />
          </div>
          <h2> Environmental Assessments and Geology</h2>
          <p> BES, IEE, EIA, SIA, SEA, Environmental Auditing, MP preparation, Geological and Geo hazard Assessments.</p>
          <Button gradientMonochrome="pink" className="rounded-3xl w-44 font-bold text-xl">    <a href='http://'  >Read More</a></Button>

        </div>




        <div className='card'>
          <div className='icon'>
              <MdEngineering />
          </div>
          <h2> Engineering and Infrastructure</h2>
          <p> Detail Project Report and Detailed Architectural Drawings, Detailed Cost Estimate and BoQ preparation.....</p>
          <Button gradientMonochrome="pink" className="rounded-3xl w-44 font-bold text-xl">    <a href='http://'  >Read More</a></Button>


        </div>




        <div className='card'>
          <div className='icon'>
              <BiSolidPlanet />
          </div>
          <h2> Disaster Risk Reduction and Management Planning</h2>
          <p>Nature Based Solution Study and Assessments, Climate Resilience Planning , LAPA, LDCRP, Vulnerability , Adaptation ..</p>
           
          <Button gradientMonochrome="pink" className="rounded-3xl w-44 font-bold text-xl">    <a href='http://'  >Read More</a></Button>

        </div>


        <div className='card'>
          <div className='icon'>
              <FaWatchmanMonitoring />
          </div>
          <h2> Monitoring and Evaluation</h2>
          <p>  Baseline Survey ,  Midline Evaluation , End line survey and  Evaluation  <br />And Monitoring ..</p>
          <Button gradientMonochrome="pink" className="rounded-3xl w-44 font-bold text-xl">    <a href='http://'  >Read More</a></Button>


        </div>


        <div className='card'>
          <div className='icon'>
              <FaLayerGroup />
          </div>
          <h2> GIS and RS and ICT</h2>
          <p>  GIS and RS based Spatial Plan, Overall Spatial Mapping and Analysis, Digital Profile and Planning</p>
          <Button gradientMonochrome="pink" className="rounded-3xl w-44 font-bold text-xl">    <a href='http://'  >Read More</a></Button>


        </div>



        <div className='card'>
          <div className='icon'>
              <AiFillCalendar />
          </div>
          <h2> Development Planning</h2>
          <p> Tourism Development Plan, Periodic Development Plan, Water Use Master Plan, Solid Waste Assessment ..</p>
          <Button gradientMonochrome="pink" className="rounded-3xl w-44 font-bold text-xl">    <a href='http://'  >Read More</a></Button>


        </div>




      </div>
      

    </div>
    </>
  )
}

export default Services
