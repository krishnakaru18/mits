import { vid } from '../assets'


const Home = () => {
  return (
    <div id='home' className="p-2 bg-white rounded-2xl text-white justify-center items-center m-1 shadow-xl">
      <div className="relative w-full h-full rounded-2xl bg-white-500">
        <video
          autoPlay
          loop
          muted
          className="rounded-2xl object-cover w-full h-50 shadow-lg" // Adjust size, border radius, and shadow
        >
          <source src={vid} type="video/mp4" />
          {/* Add additional source tags for different video formats if needed */}
        </video>
        <div className="absolute inset-0 bg-black opacity-0"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <div className="text-center w-auto h-auto px-4 md:px-8">
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-8">Explore and Discover Something Amazing</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScHTr68igEg2LS0WWe6sfIdGxBMX_pgic1yq5hfsgr9-ZgMpg/viewform">
              <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition duration-300 mt-6 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"> Get Started</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
