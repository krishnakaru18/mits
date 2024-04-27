import { img2, vid } from '../assets';

const Home = () => {
  return (
    <div id='home' className="bg-gray-100 text-white justify-center items-center shadow-xl flex">
      <div className="relative bg-white-500 ">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-screen h-full shadow-lg m-2"
        >
          <source src={vid} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-0"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <div className="text-center w-auto h-auto px-4 md:px-8 ">
            <img src={img2} alt="logo" className="w-24 sm:w-32 md:w-48 lg:w-56 xl:w-64 mb-4 mx-auto" />
            <p className="text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4">
              Explore and Discover Something Amazing
            </p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Home;
