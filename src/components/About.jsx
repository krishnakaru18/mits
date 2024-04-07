import { about } from "../assets"


const About = () => {
  
  
  return (

    // AboutSection.jsx

    <section id='about' className="p-9 m-2 bg-white shadow-xl rounded-2xl">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="hover:bg-white transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 md:w-10/12 mb-6 md:mb-0">
            <img src={about} alt="About" className="rounded-2xl" />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h2 className="text-3xl font-semibold mb-4">About Event</h2>
            <p className="text-slate-950 mb-1">
            We are from "Madanapalle Institute of Technology and Science", Angallu. This year, we are thrilled to offer an incredible opportunity for all to participate in a One-day National Level Technical Symposium named "ECLECTICA 2K24," hosted by the Department of ECE.
            Annually, the Electronics and Communication Department orchestrates a national level open-source talent program aimed at fostering innovative ideas and advancing technology. This year, we are equally excited to conduct this program with renewed enthusiasm. In this festival of intellect, you are invited to showcase your ideas through various events .
            </p>
            
            <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition duration-300 mt-6 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"> Get Started
                <a href="https://mits.ac.in/department/12">Learn More</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

