import { about } from "../assets";

const About = () => {
  return (
    <section id='about' className="bg-white shadow-xl pl-2">
      <div className="container mx-auto flex flex-col items-center py-6">
        <img src={about} alt="About" className="w-full mb-4 sm:px-2 sm:mx-" /> {/* Replace 'about' with the path to the resized image */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">About Event</h2>
          <p className="text-sm sm:text-base md:text-mb lg:text-lg mb-4 px-10">
            This year, we are thrilled to offer an incredible opportunity for all to participate in a One-day National Level Technical Symposium named "ECLECTICA 2K24," hosted by the Department of ECE. Annually, the Electronics and Communication Department orchestrates a national level open-source talent program aimed at fostering innovative ideas and advancing technology. This year, we are equally excited to conduct this program with renewed enthusiasm.
          </p>
          <a href="https://mits.ac.in/department/12" className="inline-block  text-white px-6 py-3 rounded-md hover:bg-red-500 transition duration-300 transform hover:scale-105 focus:outline-none  bg-red-400 shadow-lg shadow-red-400/50 hover:shadow-xl hover:shadow-red-500/50 ...">
            Visit Website
          </a>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default About;
