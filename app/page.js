'use client'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';

import { FreeMode, Pagination } from 'swiper/modules';

export default function Home() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-custom-white">
      <div className="bg-gradient-to-r lg:from-70% 3xl:from-65% lg:from-custom-grey lg:to-custom-green lg:to-70% 3xl:to-65% xs:to-custom-grey">
        <section className="grid grid-cols-3 lg:grid-cols-5 2xl:container mx-auto">
          <div className=" lg:px-24 col-span-3">
            <header className="bg-custom-grey px-10 lg:px-0 flex justify-center lg:justify-between items-center font-bold py-8">
              <a href='/'>
                <img src='logoTop.svg' className=' lg:w-auto w-32'></img>
              </a>

              {isDropdownOpen && (
              <div className="lg:hidden bg-white absolute top-16 right-4 py-2 px-4 rounded shadow-md">
                <ul className="flex flex-col gap-2">
                  <li><a href="#" className="hover:text-custom-green">Home</a></li>
                  <li><a href="#" className="hover:text-custom-green">Job</a></li>
                  <li><a href="#" className="hover:text-custom-green">About Us</a></li>
                  <li><a href="#" className="hover:text-custom-green">Contact</a></li>
                  <li><a href="#" className="hover:text-custom-green">Sign In</a></li>
                  <li><a href="#" className="hover:text-custom-green flex gap-1">Create Account <img src='createAccount.svg'></img></a></li>
                </ul>
              </div>
            )}

              <nav className="hidden lg:flex gap-10">
                <ul className="flex gap-10">
                  <li><a href="#" className="hover:text-custom-green">Home</a></li>
                  <li><a href="#" className="hover:text-custom-green">Job</a></li>
                  <li><a href="#" className="hover:text-custom-green">About Us</a></li>
                  <li><a href="#" className="hover:text-custom-green">Contact</a></li>
                </ul>
              </nav>
              <button
                className=" absolute right-10 lg:hidden bg-custom-green hover:bg-white group rounded-md p-2 h-12 w-14 flex flex-col justify-evenly items-end"
                onClick={toggleDropdown}
              >
                <div className='bg-white group-hover:bg-custom-green w-11/12 h-1 rounded-md'></div>
                <div className='bg-white group-hover:bg-custom-green w-2/3 h-1 rounded-md'></div>
                <div className='bg-white group-hover:bg-custom-green w-11/12 h-1 rounded-md'></div>
              </button>
            </header>
          <div className="py-10 text-center lg:text-start px-10 lg:px-0 bg-custom-white lg:bg-custom-grey">
            <h2 className="text-3xl lg:text-5xl font-bold">Search, Find, & Apply</h2>
            <p className='lg:py-10 py-8 lg:text-md md:text-sm text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolor aperiam eligendi,
              odio laboriosam harum blanditiis quisquam, quam laudantium expedita, dolorem distinctio?
              Atque, voluptatibus ad neque earum illum sed error.</p>
            
            <div className="flex justify-between bg-white rounded-2xl lg:p-5 p-3 shadow-md lg:gap-4 gap-2 lg:mb-40 mb-16 lg:text-sm text-xs">
              <div className='px-1 py-2 rounded-md bg-custom-white flex flex-1 gap-2'>
                <img src="search.svg"/>
                <input
                    type="text"
                    className=" placeholder:text-black placeholder:font-bold bg-custom-white w-full"
                    placeholder="Job title or Keyword"
                  />
              </div>
              <div className="px-1 py-2 rounded-md bg-custom-white text-black font-bold flex flex-1 gap-2">
                <img src='location.svg' ></img>
                <select className='w-full bg-custom-white'>
                  <option value="location1">Location 1</option>
                  <option value="location2">Location 2</option>
                </select>
              </div>
              <button
                className="px-4 py-2 bg-custom-green text-white rounded-md hover:bg-white hover:text-custom-green border-2 border-custom-green"
              >
                Search
              </button>
            </div>  
          </div>
        </div>
        <div className='bg-custom-green w-full h-full lg:rounded-bl-3xl lg:px-24 col-span-3 lg:col-span-2 relative'>
          <div className="py-7">
            <div className="gap-10 font-bold justify-center hidden lg:flex">
              <a href="#" className="text-white px-4 py-2 border-2 border-custom-green hover:border-white rounded-md">Sign in</a>
              <button
                href="#" className="px-4 py-2  bg-white rounded-md group hover:text-white hover:bg-custom-green border-white border-2 flex gap-2"
              ><img src='createAccount.svg' className='my-auto group-hover:invert'></img> <span> Create account</span></button>
            </div>
            <div className=" h-96 w-full lg:hidden"></div>
            <img src='searchGreenIcon.svg' className="absolute lg:top-36 top-20 left-20"></img>
            <img src='plotGreenIcon.svg' className="absolute lg:top-60 top-36 right-5"></img>
            <img src='safeGreenIcon.svg' className="absolute lg:bottom-40 bottom-20 left-16"></img>
          </div>
        </div>
      </section>
      </div>




      <div className="flex justify-between lg:pt-40 pt-24 gap-5 lg:px-24 px-10 2xl:container mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold">How it works</h2>
          <p className="py-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolor aperiam eligendi, odio laboriosam harum blanditiis quisquam, quam laudantium expedita, dolorem distinctio? Atque, voluptatibus ad neque earum illum sed error.</p>
        </div>
        <div className="hidden lg:flex">
          <button className="font-bold text-custom-green border-2 border-custom-green rounded-md px-5 py-2 my-16 hover:bg-custom-green hover:text-white">Learn More</button>
        </div>
      </div>


      <div className="grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-8 lg:px-20 px-10 py-8 2xl:container mx-auto">
        <div className=" bg-white rounded-2xl p-8 shadow-md">
          <img src='register.png'></img>
          <h3 className="text-2xl font-bold my-5">Register</h3>
          <div className="text-xs text-custom-text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</div>
        </div>
        <div className=" bg-white rounded-2xl p-8 shadow-md">
          <img src='creatResume.png'></img>
          <h3 className="text-2xl font-bold my-5">Create a Resume</h3>
          <div className="text-xs text-custom-text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</div>
        </div>
        <div className=" bg-white rounded-2xl p-8 shadow-md">
          <img src='findJob.png'></img>
          <h3 className="text-2xl font-bold my-5">Find Job</h3>
          <div className="text-xs text-custom-text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</div>
        </div>
        <div className=" bg-white rounded-2xl p-8 shadow-md">
          <img src='applyJob.png'></img>
          <h3 className="text-2xl font-bold my-5">Apply Job</h3>
          <div className="text-xs text-custom-text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</div>
        </div>
      </div>
      <div>
        <button className="font-bold text-custom-green border-2 border-custom-green rounded-md px-5 py-2 hover:bg-custom-green hover:text-white lg:hidden mx-auto block">Learn More</button>
      </div>



      <div className="lg:px-24 px-10 grid lg:grid-cols-2 grid-cols-1 py-32 lg:gap-20 2xl:container mx-auto">
        <div className="bg-custom-dark-grey rounded-2xl h-full p-40"></div>
        <div className='lg:text-start text-center my-auto'>
          <h2 className='text-3xl lg:text-4xl font-bold my-6'>We will help you to become an employee in your dream company</h2>
          <p className="text-custom-text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
          <button className="font-bold text-custom-green border-2 border-custom-green rounded-md px-5 py-2 mt-6 lg:mx-0 mx-auto hover:bg-custom-green hover:text-white block">Learn More</button>
        </div>
      </div>

      <div className='bg-custom-green bg-opacity-5'>
        <div className="lg:py-32 py-10 2xl:container mx-auto">
          <h2 className='text-3xl lg:text-4xl font-bold text-center'>Popular Job Categories</h2>
          <p className="text-custom-text-grey lg:mx-80 mx-20 text-center my-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
          

          <div className="swiper-container lg:ml-24 ml-10">
            <Swiper
              grabCursor={true}
              freeMode={true}
              modules={[FreeMode]}

              slidesPerView={1.3} 
              spaceBetween={30}
              breakpoints={{
                650: {
                  slidesPerView: 2.1,
                },
                700: {
                  slidesPerView: 2.3,
                },
                1100: {
                  slidesPerView: 3.3,
                },
                1400: {
                  slidesPerView: 4.3, 
                },
              }}
              className="mySwiper h-60"
            >
              <SwiperSlide>
              <div className="bg-white rounded-2xl p-10 min-h-full group hover:bg-custom-green relative">
                <img src='design&Developement.png' className=" group-hover:brightness-0 group-hover:invert"></img>
                <h3 className="text-2xl font-bold my-5 group-hover:text-white">Design and Development</h3>
                <p className="text-xs text-custom-text-grey group-hover:text-white absolute left-10 bottom-5">350 Job Vacancy</p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="bg-white rounded-2xl p-10  min-h-full group hover:bg-custom-green relative">
                <img src='accounting&Finance.png' className=" group-hover:brightness-0 group-hover:invert"></img>
                <h3 className="text-2xl font-bold my-5 group-hover:text-white">Accounting and Finance</h3>
                <p className="text-xs text-custom-text-grey group-hover:text-white absolute left-10 bottom-5">350 Job Vacancy</p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="bg-white rounded-2xl p-10 min-h-full group hover:bg-custom-green relative">
                <img src='bankInstitution.png' className=" group-hover:brightness-0 group-hover:invert"></img>
                <h3 className="text-2xl font-bold my-5 group-hover:text-white">Bank institution</h3>
                <p className="text-xs text-custom-text-grey group-hover:text-white absolute left-10 bottom-5">350 Job Vacancy</p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="bg-white rounded-2xl p-10 min-h-full group hover:bg-custom-green relative">
                <img src='productManagment.png' className=" group-hover:brightness-0 group-hover:invert"></img>
                <h3 className="text-2xl font-bold my-5 group-hover:text-white">Product Management</h3>
                <p className="text-xs text-custom-text-grey group-hover:text-white absolute left-10 bottom-5">350 Job Vacancy</p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="bg-white rounded-2xl p-10 min-h-full group hover:bg-custom-green relative">
                <img src='customerSupport.png' className=" group-hover:brightness-0 group-hover:invert"></img>
                <h3 className="text-2xl font-bold my-5 group-hover:text-white">Customer Support</h3>
                <p className="text-xs text-custom-text-grey group-hover:text-white absolute left-10 bottom-5">350 Job Vacancy</p>
              </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <button className="font-bold text-custom-green border-2 border-custom-green rounded-md px-5 py-2 mt-10 hover:bg-custom-green hover:text-white block mx-auto">View More</button>

        </div>
      </div>
      
      


      <div className="lg:py-32 py-24 2xl:container mx-auto">
        <h2 className='text-3xl lg:text-4xl font-bold text-center'>Recently Added Jobs</h2>
        <p className="text-custom-text-grey lg:mx-80 mx-20 text-center my-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
        

        <div className="swiper-container lg:ml-24 ml-10">
          <Swiper
            grabCursor={true}
            freeMode={true}
            modules={[FreeMode]}

            slidesPerView={0.9} 
            spaceBetween={30}
            breakpoints={{
              600: {
                slidesPerView: 1.2,
              },
              730: {
                slidesPerView: 1.5,
              },
              1200: {
                slidesPerView: 2.4,
              },
              1400: {
                slidesPerView: 2.6, 
              },
            }}
            className="mySwiper h-[510px]"
          >
            <SwiperSlide>
            <div className="bg-white rounded-2xl p-10 min-h-full relative">
              <img src='uxUI.png'></img>
              <h3 className="text-2xl font-bold my-5 ">UI/UX Designer</h3>
              <p className=' text-custom-text-grey font-bold'>Dimension Studio</p>
              <p className=' text-custom-text-grey my-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
              <div className='flex gap-2 mb-5'>  
                <div className="px-4 py-2 border rounded-xl bg-custom-grey text-black font-bold flex gap-2 items-center w-fit">
                  <img src='location.svg' ></img>
                  <div className='text-xs'>San Francisco, CA</div>
                </div>
                <div className="px-4 py-2 border rounded-xl bg-custom-grey text-black font-bold flex gap-2 items-center w-fit">
                  <img src='fullTime.svg' ></img>
                  <div className='text-xs'>Full Time</div>
                </div>
              </div>
              <a href='#' className=' text-custom-green hover:text-black text-2xl font-bold'>Apply Now {'>'}</a>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="bg-white rounded-2xl p-10 min-h-full relative">
              <img src='fullStack.png'></img>
              <h3 className="text-2xl font-bold my-5 ">Full Stack Developer</h3>
              <p className=' text-custom-text-grey font-bold'>Alpander</p>
              <p className=' text-custom-text-grey my-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
              <div className='flex gap-2 mb-5'>  
              <div className="px-4 py-2 border rounded-xl bg-custom-grey text-black font-bold flex gap-2 items-center w-fit">
                  <img src='location.svg' ></img>
                  <div className='text-xs'>San Francisco, CA</div>
                </div>
                <div className="px-4 py-2 border rounded-xl bg-custom-grey text-black font-bold flex gap-2 items-center w-fit">
                  <img src='fullTime.svg' ></img>
                  <div className='text-xs'>Full Time</div>
                </div>
              </div>
              <a href='#' className=' text-custom-green hover:text-black text-2xl font-bold'>Apply Now {'>'}</a>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="bg-white rounded-2xl p-10 min-h-full relative">
              <img src='productDesigner.png'></img>
              <h3 className="text-2xl font-bold my-5">Product Designer</h3>
              <p className=' text-custom-text-grey font-bold'>XReact Tech</p>
              <p className=' text-custom-text-grey my-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
              <div className='flex gap-2 mb-5'>  
              <div className="px-4 py-2 border rounded-xl bg-custom-grey text-black font-bold flex gap-2 items-center w-fit">
                  <img src='location.svg' ></img>
                  <div className='text-xs'>San Francisco, CA</div>
                </div>
                <div className="px-4 py-2 border rounded-xl bg-custom-grey text-black font-bold flex gap-2 items-center w-fit">
                  <img src='fullTime.svg' ></img>
                  <div className=' text-xs'>Full Time</div>
                </div>
              </div>
              <a href='#' className=' text-custom-green hover:text-black text-2xl font-bold'>Apply Now {'>'}</a>
            </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <button className="font-bold text-custom-green border-2 border-custom-green rounded-md px-5 py-2 mt-10 hover:bg-custom-green hover:text-white block mx-auto">View More</button>

      </div>




      <div className="lg:px-24 px-10 lg:mb-40 mb-20 2xl:container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center lg:text-start">People's Feedback about JobNow!</h2>
      
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-10 my-5">
          <div>
            <p className='text-custom-text-grey text-center lg:text-start mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
            <p className=' text-xl text-center lg:text-start my-10 font-bold'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur."</p>
            <div className=" lg:block hidden">
              <p className=' text-2xl text-center lg:text-start mt-10 mb-2 font-bold'>Brown Gracia</p>
              <p className='text-xs text-custom-text-grey text-center lg:text-start'>Full Stack Developer in XReact Tech</p>
              <div className='my-5 mx-2 flex justify-start gap-8'>  
                <img src='greyLeftArrow.svg' className='hover:brightness-0'></img>
                <img src='greenRightArrow.svg' className='hover:brightness-0'></img>
              </div>
            </div>
          </div>
          <div className="bg-custom-green rounded-2xl h-full p-36"></div>
          <div className=" lg:hidden">
              <p className=' text-2xl text-center lg:text-start font-bold'>Brown Gracia</p>
              <p className='text-xs text-custom-text-grey text-center lg:text-start'>Full Stack Developer in XReact Tech</p>
              <div className='my-5 flex justify-center gap-8'>  
                <img src='greyLeftArrow.svg' className='hover:brightness-0'></img>
                <img src='greenRightArrow.svg' className='hover:brightness-0'></img>
              </div>
            </div>
        </div>
      </div>


      <div className="bg-gradient-to-b from-50% from-transparent to-50% to-custom-green text-white lg:px-24 px-10">
        <div className='bg-custom-dark-green rounded-xl h-full flex flex-col items-center py-10 2xl:container mx-auto'>
          <h2 className='text-2xl lg:text-4xl font-bold'>Register your CV now!</h2>
          <p className='text-custom-text-grey my-5 mx-5 lg:mx-52 sm:mx-20 text-center text-xs sm:text-sm lg:text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
          <button className="font-bold border-2 border-white rounded-md px-5 py-2 hover:border-custom-green hover:text-custom-green block mx-auto">Register Now</button>
        </div>
      </div>

      <div className='bg-custom-green'>
        <div className='lg:px-24 px-10 grid lg:grid-cols-5 grid-cols-2 text-white lg:gap-32 gap-10 py-16 2xl:container mx-auto'>
          
          <div className='col-span-2 my-auto'>
            <a href='/'>
              <img src='logoBottom.svg' className=' lg:w-auto w-32'></img>
            </a>
            <p className='text-xs my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

            <div>
              <h3 className='text-xl font-bold'>Company</h3>
              <ul className='text-sm my-2'>
                <li>Adress : 123 Fifth Avenue, New York - 1060, USA.</li>
                <li>Call Us : +(1600) 456 7890</li>
                <li>Email : yourid@example.com</li>
                <li>Mon Sat : 9:00 AM - 19:00 PM</li>
              </ul>
            </div>

            <div>
              <h3 className='text-xl font-bold'>Pages</h3>
              <ul className='text-sm my-2'>
                <li><a href='/' className='hover:text-black'>Home</a></li>
                <li><a href='#' className='hover:text-black'>Booking</a></li>
                <li><a href='#' className='hover:text-black'>Facilities</a></li>
                <li><a href='#' className='hover:text-black'>About Us</a></li>
                <li><a href='#' className='hover:text-black'>Location</a></li>
                <li><a href='#' className='hover:text-black'>Contact</a></li>
              </ul>
            </div>


          <div>
            <h3 className='text-xl font-bold'>Contact Us</h3>
            <div className='flex justify-between my-2'>
              <a href='#'><img src='google.svg' className='hover:brightness-0'></img></a>
              <a href='#'><img src='facebook.svg' className='hover:brightness-0'></img></a>
              <a href='#'><img src='twitter.svg' className='hover:brightness-0'></img></a>
              <a href='#'><img src='linkedin.svg' className='hover:brightness-0'></img></a>
            </div>


          </div>
        </div>
      </div>
      
    </div>
  )
}