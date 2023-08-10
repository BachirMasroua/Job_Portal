import Image from 'next/image'

export default function Home() {
  return (
    <div className=" bg-gradient-to-r md:from-70% 3xl:from-65% from-custom-grey to-custom-green md:to-70% 3xl:to-65%">
      <section className="grid grid-cols-2 md:grid-cols-3 place-items-center 2xl:container mx-auto">
      <div className="px-24 col-span-2">
      <header className="flex justify-between items-center bg-transparent font-bold py-8">
        <div className="logo text-4xl font-bold">
          <span className="text-black">Job</span>
          <span className="text-custom-green">Now</span>
        </div>
        <nav>
          <ul className="flex gap-10">
            <li><a href="#" className=" hover:text-custom-green">Home</a></li>
            <li><a href="#" className=" hover:text-custom-green">Job</a></li>
            <li><a href="#" className=" hover:text-custom-green">About Us</a></li>
            <li><a href="#" className=" hover:text-custom-green">Contact</a></li>
          </ul>
        </nav>
        </header>
        <div className="py-10">
        <h2 className="text-5xl font-bold">Search, Find, & Apply</h2>
        <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolor aperiam eligendi,
          odio laboriosam harum blanditiis quisquam, quam laudantium expedita, dolorem distinctio?
          Atque, voluptatibus ad neque earum illum sed error. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.</p>
          
          <div className="flex items-center gap-4 bg-white rounded-md p-3">
            <input
              type="text"
              className="px-4 py-2 border rounded-md w-full bg bg-custom-grey"
              placeholder="Search job"
            />
            <select
              className="px-4 py-2 border rounded-md bg-custom-grey"
            >
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
            </select>
            <button
              className="px-4 py-2 bg-custom-green text-white rounded-md hover:bg-white hover:text-custom-green"
            >
              Search
            </button>
          </div>  
        </div>
      </div>
      <div className='bg-custom-green w-full h-full rounded-bl-3xl px-24'>
        <div className="py-6">
          <div className="flex gap-10 font-bold justify-center">
            <a href="#" className="text-white p-4 hover:border rounded-md">Sign in</a>
            <button
              href="#" className="px-4 py-2  bg-white rounded-md hover:text-white hover:bg-custom-green border-white border"
            >Create account</button>
          </div>
        </div>
      </div>

    </section>
    </div>
  )
}
