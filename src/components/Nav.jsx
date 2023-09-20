import { Link } from "react-scroll"
import { useState } from "react";
import {FaTimes}   from "react-icons/fa"
import {CiMenuFries}   from "react-icons/ci"
import { Button } from 'flowbite-react';



const Nav = () => { 
    const [click, setClick]= useState(false);
    const handelClick = () =>  setClick(!click);

  const content = <>

  <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bgnav">
    <ui className="text-center text-xl  p-0 list-none bg-white">
    <Link spy={true} smooth={true}> 
      <li className="my-0 py-4 border-b border-slate-100 hover:bg-slate-100 hover:rounded bg-white">Home</li>
    </Link>
    <Link spy={true} smooth={true}> 
      <li className="my-0 py-4 border-b border-slate-100 hover:bg-slate-100 hover:rounded bg-white">About</li>
    </Link>
    <Link spy={true} smooth={true}> 
      <li className="my-0 py-4 border-b border-slate-100 hover:bg-slate-100 hover:rounded bg-white">Blog</li>
    </Link>
    <Link spy={true} smooth={true}> 
      <li className="my-0 py-4 border-b border-slate-100 hover:bg-slate-100 hover:rounded bg-white">Projects</li>
    </Link>
    <Link spy={true} smooth={true}> 
      <li className="my-0 py-4 border-b border-slate-100 hover:bg-slate-100 hover:rounded bg-white">Contact</li>
    </Link>

    </ui>
  </div>
  </>

  
  return(
    

    <nav>
      <div className='h-10vh flex justify-between z-50 text-black lg:py-5 px-20 my-1 mx-1 py-4 bgnav'>
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold ">Logo</span>
        </div>
        <div className="lf:flex md:flex lg: flex-1  items center justify-end font-normal hidden ">
          <div className="flex-10">
            <ui className="flex gap-8 mr-6 text-[18px] list-none">
            <Link spy={true} smooth={true}> 
                 <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Home</li>
            </Link>
            <Link spy={true} smooth={true}> 
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">About</li>
            </Link>
            <Link spy={true} smooth={true}> 
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Blog</li>
            </Link>
            <Link spy={true} smooth={true}> 
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Projects</li>
            </Link>
            <Link spy={true} smooth={true}> 
              <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Contact</li>
            </Link>

            <Button gradientMonochrome="pink" className="right-0">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900 right-0">
              Contact <span aria-hidden="true">&rarr;</span></a>
                </Button>
            </ui>
            
          </div>
        </div>
       
       
        <div>
            {click && content}
        </div>


        <button className="block lg:hidden transtion" onClick={handelClick} >
            {click ? <FaTimes /> : <CiMenuFries /> }
        </button>



      </div>



    </nav>
  );

};


export default Nav;

