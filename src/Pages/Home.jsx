import { Button } from 'flowbite-react'; 
import {  BsFacebook} from "react-icons/bs"
function Home() {
  return (
    <div className="landing-home">
      <div className="flex flex-row">



            <div className="basis-3/5"><div className="banner-content-two px-28 pt-32 text-[#6F6F6F] ">
                                <span className="sub-title text-2xl ">Hi, Welcome</span>
                                <h2 className="title py-4 font-extrabold text-7xl  tracking-wide">Introducing the <br/>Best <span className='text-[#5DB85E]'>Environment</span><br/> Reseach Center.</h2>
                                <div className="banner-content-bottom flex pt-12">
                                <Button gradientMonochrome="pink" className="rounded-3xl w-44 font-bold text-xl">  <a href="contact.html" className='text-xl' >Contact Us <span></span></a></Button>
                                    <ul className="flex ml-5 p-2">
                                          <li className=' pl-5'> <BsFacebook /> </li>
                                            <li className='  pl-5'> Insta </li>
                                            <li className=' pl-5'> twiter </li>
                                            <li className='  pl-5'> lkdn </li>
                                        <li className='  pl-5'>svg</li>
                                    </ul>
                                </div>
                            </div>
            </div>










            <div className="basis-2/5">02
            <img src="../../public/images/earth.png" alt="animated earth" className='pt-4 h-full w-full'  />


            




            









            
            </div>

      </div>
    </div>
  )
}

export default Home
