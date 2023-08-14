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
        <section className="grid grid-cols-2 lg:grid-cols-3 2xl:container mx-auto">
          <div className=" lg:px-24 col-span-2">
            <header className="bg-custom-grey px-10 lg:px-0 flex justify-center lg:justify-between items-center font-bold py-8">
              <a href='/' className="logo text-4xl font-bold flex">
                <span className="text-black">Job</span>
                <span className="text-custom-green">N</span>
                <img src='logoQTop.png' className='mt-2 mb-1 ml-0.5'></img>
                <span className="text-custom-green">w</span>
              </a>

              {isDropdownOpen && (
              <div className="lg:hidden bg-white absolute top-16 right-4 py-2 px-4 rounded shadow-md">
                <ul className="flex flex-col gap-2">
                  <li><a href="#" className="hover:text-custom-green">Home</a></li>
                  <li><a href="#" className="hover:text-custom-green">Job</a></li>
                  <li><a href="#" className="hover:text-custom-green">About Us</a></li>
                  <li><a href="#" className="hover:text-custom-green">Contact</a></li>
                  <li><a href="#" className="hover:text-custom-green">Sign In</a></li>
                  <li><a href="#" className="hover:text-custom-green"><img src='createAccount.png'></img> Create Account</a></li>
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
                className=" absolute right-5 lg:hidden bg-custom-green hover:bg-white group rounded-md p-2 h-12 w-14 flex flex-col justify-evenly items-end"
                onClick={toggleDropdown}
              >
                <div className='bg-white group-hover:bg-custom-green w-11/12 h-1 rounded-md'></div>
                <div className='bg-white group-hover:bg-custom-green w-2/3 h-1 rounded-md'></div>
                <div className='bg-white group-hover:bg-custom-green w-11/12 h-1 rounded-md'></div>
              </button>
            </header>
          <div className="py-10 text-center lg:text-start px-10 lg:px-0 bg-custom-white lg:bg-custom-grey">
            <h2 className=" text-4xl lg:text-5xl font-bold">Search, Find, & Apply</h2>
            <p className='py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolor aperiam eligendi,
              odio laboriosam harum blanditiis quisquam, quam laudantium expedita, dolorem distinctio?
              Atque, voluptatibus ad neque earum illum sed error.</p>
            
            <div className="flex justify-between bg-white rounded-2xl p-5 shadow-md gap-4">
              <div className='px-4 py-2 border rounded-md bg-custom-grey flex flex-1 gap-2'>
                <img src="search.png"/>
                <input
                    type="text"
                    className=" placeholder:text-black placeholder:font-bold bg-custom-grey w-full"
                    placeholder="Job title or Keyword"
                  />
              </div>
              <div className="px-4 py-2 border rounded-md bg-custom-grey text-black font-bold flex flex-1 gap-2">
                <img src='location.png' ></img>
                <select className='w-full bg-custom-grey'>
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
        <div className='bg-custom-green w-full h-full lg:rounded-bl-3xl lg:px-24 col-span-2 lg:col-span-1 relative'>
          <div className="py-7">
            <div className="gap-10 font-bold justify-center hidden lg:flex">
              <a href="#" className="text-white px-4 py-2 border-2 border-custom-green hover:border-white rounded-md">Sign in</a>
              <button
                href="#" className="px-4 py-2  bg-white rounded-md group hover:text-white hover:bg-custom-green border-white border-2 flex gap-2"
              ><img src='createAccount.png' className='my-auto group-hover:invert'></img> <span> Create account</span></button>
            </div>
            <div className="h-96 w-full"></div>
            <div className=" h-20 w-full hidden lg:flex"></div>
            <img src='searchGreenIconBackground.png' className="absolute top-36 left-28 transform -translate-x-1/2 -translate-y-1/2"></img>
            <img src='searchGreenIcon.png' className="absolute top-36 left-28 transform -translate-x-1/2 -translate-y-1/2"></img>
            <img src='plotGreenIconBackground.png' className="absolute top-60 right-5"></img>
            <img src='plotGreenIcon.png' className="absolute top-60 right-5 transform -translate-x-1/2 translate-y-1/2"></img>
            <img src='safeGreenIconBackground.png' className="absolute top-96 left-20 -translate-x-1/2 -translate-y-1/2"></img>
            <img src='safeGreenIcon.png' className="absolute top-96 left-20 transform -translate-x-1/2 -translate-y-1/2"></img>
          </div>
        </div>
      </section>
      </div>




      <div className="flex justify-between pt-32 gap-5 lg:px-24 px-10 2xl:container mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">How it works</h2>
          <p className="py-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolor aperiam eligendi, odio laboriosam harum blanditiis quisquam, quam laudantium expedita, dolorem distinctio? Atque, voluptatibus ad neque earum illum sed error.</p>
        </div>
        <div className="hidden lg:flex">
          <button className="font-bold text-custom-green border-2 border-custom-green rounded-md px-5 py-2 my-16 hover:bg-custom-green hover:text-white">Learn More</button>
        </div>
      </div>


      <div className="flex justify-evenly flex-wrap gap-8 lg:px-20 px-10 py-8 2xl:container mx-auto">
        <div className="w-72 h-56 bg-white rounded-2xl p-8 shadow-md">
          <img src='register.png'></img>
          <h3 className="text-2xl font-bold my-5">Register</h3>
          <p className="text-xs text-custom-text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="w-72 h-56 bg-white rounded-2xl p-8 shadow-md">
          <img src='creatResume.png'></img>
          <h3 className="text-2xl font-bold my-5">Create a Resume</h3>
          <p className="text-xs text-custom-text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="w-72 h-56 bg-white rounded-2xl p-8 shadow-md">
          <img src='findJob.png'></img>
          <h3 className="text-2xl font-bold my-5">Find Job</h3>
          <p className="text-xs text-custom-text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="w-72 h-56 bg-white rounded-2xl p-8 shadow-md">
          <img src='applyJob.png'></img>
          <h3 className="text-2xl font-bold my-5">Apply Job</h3>
          <p className="text-xs text-custom-text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <div>
        <button className="font-bold text-custom-green border-2 border-custom-green rounded-md px-5 py-2 hover:bg-custom-green hover:text-white lg:hidden mx-auto block">Learn More</button>
      </div>



      <div className="lg:px-24 px-10 grid lg:grid-cols-2 grid-cols-1 py-32 lg:gap-20 2xl:container mx-auto">
        <div className="bg-custom-dark-grey rounded-2xl max-w-full h-72"></div>
        <div className='lg:text-start text-center'>
          <h2 className='text-3xl font-bold my-6'>We will help you to become an employee in your dream company</h2>
          <p className="text-custom-text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
          <button className="font-bold text-custom-green border-2 border-custom-green rounded-md px-5 py-2 mt-6 lg:mx-0 mx-auto hover:bg-custom-green hover:text-white block">Learn More</button>
        </div>
      </div>

      <div className='bg-custom-green bg-opacity-5'>
        <div className="py-32 2xl:container mx-auto">
          <h2 className='text-4xl font-bold text-center'>Popular Job Categories</h2>
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
              className="mySwiper"
            >
              <SwiperSlide>
              <div className="bg-white rounded-2xl p-10 shadow-md w-72 h-60 group hover:bg-custom-green relative m-1">
                <img src='design&Developement.png' className=" group-hover:brightness-0 group-hover:invert"></img>
                <h3 className="text-2xl font-bold my-5 group-hover:text-white">Design and Development</h3>
                <p className="text-xs text-custom-text-grey group-hover:text-white absolute left-10 bottom-5">350 Job Vacancy</p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="bg-white rounded-2xl p-10 shadow-md w-72 h-60 group hover:bg-custom-green relative m-1">
                <img src='register.png' className=" group-hover:brightness-0 group-hover:invert"></img>
                <h3 className="text-2xl font-bold my-5 group-hover:text-white">Accounting and Finance</h3>
                <p className="text-xs text-custom-text-grey group-hover:text-white absolute left-10 bottom-5">350 Job Vacancy</p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="bg-white rounded-2xl p-10 shadow-md w-72 h-60 group hover:bg-custom-green relative m-1">
                <img src='bankInstitution.png' className=" group-hover:brightness-0 group-hover:invert"></img>
                <h3 className="text-2xl font-bold my-5 group-hover:text-white">Bank institution</h3>
                <p className="text-xs text-custom-text-grey group-hover:text-white absolute left-10 bottom-5">350 Job Vacancy</p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="bg-white rounded-2xl p-10 shadow-md w-72 h-60 group hover:bg-custom-green relative m-1">
                <img src='register.png' className=" group-hover:brightness-0 group-hover:invert"></img>
                <h3 className="text-2xl font-bold my-5 group-hover:text-white">Apply Job</h3>
                <p className="text-xs text-custom-text-grey group-hover:text-white absolute left-10 bottom-5">350 Job Vacancy</p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="bg-white rounded-2xl p-10 shadow-md w-72 h-60 group hover:bg-custom-green relative m-1">
                <img src='register.png' className=" group-hover:brightness-0 group-hover:invert"></img>
                <h3 className="text-2xl font-bold my-5 group-hover:text-white">Apply Job</h3>
                <p className="text-xs text-custom-text-grey group-hover:text-white absolute left-10 bottom-5">350 Job Vacancy</p>
              </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <button className="font-bold text-custom-green border-2 border-custom-green rounded-md px-5 py-2 mt-10 hover:bg-custom-green hover:text-white block mx-auto">View More</button>

        </div>
      </div>
      
      


      <div className="py-32 2xl:container mx-auto">
        <h2 className='text-4xl font-bold text-center'>Recently Added Jobs</h2>
        <p className="text-custom-text-grey lg:mx-80 mx-20 text-center my-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
        

        <div className="swiper-container lg:ml-24 ml-10">
          <Swiper
            grabCursor={true}
            freeMode={true}
            modules={[FreeMode]}

            slidesPerView={0.8} 
            spaceBetween={30}
            breakpoints={{
              650: {
                slidesPerView: 1.2,
              },
              700: {
                slidesPerView: 1.5,
              },
              1100: {
                slidesPerView: 2.4,
              },
              1400: {
                slidesPerView: 2.6, 
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
            <div className="bg-white rounded-2xl p-10 shadow-md h-[510px] group hover:bg-custom-green relative m-1">
              <img src='register.png' className=" group-hover:brightness-0 group-hover:invert"></img>
              <h3 className="text-2xl font-bold my-5 group-hover:text-white">Bank institution</h3>
              <p className="text-xs text-custom-text-grey group-hover:text-white absolute left-10 bottom-5">350 Job Vacancy</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="bg-white rounded-2xl p-10 shadow-md h-[510px] group hover:bg-custom-green relative m-1">
              <img src='register.png' className=" group-hover:brightness-0 group-hover:invert"></img>
              <h3 className="text-2xl font-bold my-5 group-hover:text-white">Apply Job</h3>
              <p className="text-xs text-custom-text-grey group-hover:text-white absolute left-10 bottom-5">350 Job Vacancy</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="bg-white rounded-2xl p-10 shadow-md h-[510px] group hover:bg-custom-green relative m-1">
              <img src='register.png' className=" group-hover:brightness-0 group-hover:invert"></img>
              <h3 className="text-2xl font-bold my-5 group-hover:text-white">Apply Job</h3>
              <p className="text-xs text-custom-text-grey group-hover:text-white absolute left-10 bottom-5">350 Job Vacancy</p>
            </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <button className="font-bold text-custom-green border-2 border-custom-green rounded-md px-5 py-2 mt-10 hover:bg-custom-green hover:text-white block mx-auto">View More</button>

      </div>




      <div className="lg:px-24 px-10 lg:mb-40 mb-20 2xl:container mx-auto">
        <h2 className="text-4xl font-bold text-center lg:text-start">People's Feedback about JobNow!</h2>
      
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 my-5">
          <div>
            <p className='text-custom-text-grey text-center lg:text-start mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
            <p className=' text-xl text-center lg:text-start my-10 font-bold'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur."</p>
            <div className=" lg:block hidden">
              <p className=' text-2xl text-center lg:text-start mt-10 mb-2 font-bold'>Brown Gracia</p>
              <p className='text-xs text-custom-text-grey text-center lg:text-start'>Full Stack Developer in XReact Tech</p>
              <div className='my-5 mx-2 flex justify-start gap-8'>  
                <img src='greyLeftArrow.png' className='hover:brightness-0'></img>
                <img src='greenRightArrow.png' className='hover:brightness-0'></img>
              </div>
            </div>
          </div>
          <div className="bg-custom-green rounded-2xl max-w-full h-72 lg:h-full mx-5"></div>
          <div className=" lg:hidden">
              <p className=' text-2xl text-center lg:text-start mt-10 mb-2 font-bold'>Brown Gracia</p>
              <p className='text-xs text-custom-text-grey text-center lg:text-start'>Full Stack Developer in XReact Tech</p>
              <div className='my-5 flex justify-center gap-8'>  
                <img src='greyLeftArrow.png' className='hover:brightness-0'></img>
                <img src='greenRightArrow.png' className='hover:brightness-0'></img>
              </div>
            </div>
        </div>
      </div>


      <div className="bg-gradient-to-b from-50% from-transparent to-50% to-custom-green h-64 text-white lg:px-24 px-10">
        <div className='bg-custom-dark-green rounded-xl h-full flex flex-col items-center py-10 2xl:container mx-auto'>
          <h2 className='lg:text-4xl text-2xl font-bold'>Register your CV now!</h2>
          <p className='text-custom-text-grey my-5 mx-5 lg:mx-52 sm:mx-20 text-center text-xs sm:text-sm lg:text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
          <button className="font-bold border-2 border-white rounded-md px-5 py-2 hover:border-custom-green hover:text-custom-green block mx-auto">Register Now</button>
        </div>
      </div>

      <div className='bg-custom-green'>
        <div className='lg:px-24 px-10 grid lg:grid-cols-5 grid-cols-2 text-white lg:gap-32 gap-10 py-16 2xl:container mx-auto'>
          
          <div className='col-span-2 my-auto'>
            <a href='/' className="logo text-4xl font-bold flex">
              <span className="text-black">Job</span>
              <span className="text-white">N</span>
              <img src='logoQBottom.png' className='ml-0.5 mt-2'></img>
              <span className="text-white">w</span>
            </a>
            <p className='text-xs my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-20">
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
                <li>Home</li>
                <li>Booking</li>
                <li>Facilities</li>
                <li>About Us</li>
                <li>Location</li>
                <li>Contact</li>
              </ul>
            </div>

          </div>

          <div>
            <h3 className='text-xl font-bold'>Contact Us</h3>
            <div className='flex justify-between my-2'>
              <img src='google.png'></img>
              <img src='facebook.png'></img>
              <img src='twitter.png'></img>
              <img src='linkedin.png'></img>
            </div>


          </div>
        </div>
      </div>
      
    </div>
  )
}