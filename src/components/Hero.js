import Farm from '../assets/milk-farm.jpeg';

export const Hero = () => (
  <section className="text-gray-600 body-font">
    <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
      <div
        className="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1
          className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
          DTRC,&nbsp;LLC
        </h1>
        <p className="mb-4 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300 text-2xl">
          Dairy, Transport & Regulatory Consultants
        </p>
        <p className="mb-8 leading-relaxed dark:text-gray-300">
          We assist Dairy Farmers, Milk Haulers, and Dairy Transporters with 50 years of first-hand experience navigating business and regulation.
        </p>
        <div className="flex justify-center">
          <a href="mailto:nbendixen@dtrconsultant.com"
            className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg">
            Contact Us
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
        <img className="object-cover object-center rounded" alt="hero" src={ Farm } />
      </div>
    </div>
  </section>
)