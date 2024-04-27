import { paper } from '../assets'
import { poster } from '../assets'
import { project } from '../assets'
import { quiz } from '../assets'
import { Think } from '../assets'


const Tech = () => {
  const techItems = [
    {
      id: 1,
      imageSrc: paper,
      title: 'Paper Presentation',
      description: 'Registration Fees : 100 RS/-',
      contact: 'K.Bhargavi - 8639455405',
      contact2: 'B.Karthik - 9676328514',
      button: 'Register',
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScHTr68igEg2LS0WWe6sfIdGxBMX_pgic1yq5hfsgr9-ZgMpg/viewform' // Add register link for item 1
    },
    {
      id: 2,
      imageSrc: poster,
      title: 'Poster Presentation',
      description: 'Registration Fee : 100 RS/- ',
      contact: 'Sahana - 7207206053',
      contact2: 'Thanooj - 7382035669',
      button: 'Register',
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScHTr68igEg2LS0WWe6sfIdGxBMX_pgic1yq5hfsgr9-ZgMpg/viewform' // Add register link for item 2
    },
    // Add register links for other items similarly
    {
      id: 3,
      imageSrc: project,
      title: 'PROJECT-EXPO',
      description: 'Registration Fee : 100 RS/-',
      contact: 'B.Nishanth - 6281050055',
      contact2: 'D.Amaresh-8688567029',
      button: 'Register',
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScHTr68igEg2LS0WWe6sfIdGxBMX_pgic1yq5hfsgr9-ZgMpg/viewform' // Add register link for item 1
    },
    {
      id: 4,
      imageSrc: quiz,
      title: 'QUIZZIE BUZZIE',
      description: 'Registration Fee : 100 RS/-',
      contact: 'Mokshith - 6300146347',
      contact2: 'Sanjeeva - 9491087949',
      button: 'Register',
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScHTr68igEg2LS0WWe6sfIdGxBMX_pgic1yq5hfsgr9-ZgMpg/viewform' // Add register link for item 2
    },
    // Add register links for other items similarly
    {
      id: 5,
      imageSrc: Think,
      title: 'THINK & CONNECT',
      description: 'Registration Fee : 100 RS/-',
      contact: 'krishna-7674733747',
      contact2: 'krishna-7674733747',
      button: 'Register',
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScHTr68igEg2LS0WWe6sfIdGxBMX_pgic1yq5hfsgr9-ZgMpg/viewform' // Add register link for item 1
    },
    {
      id: 6,
      imageSrc: paper,
      title: 'Tech Item 2',
      description: 'Description for Tech Item 2',
      contact: 'krishna-7674733747',
      contact2: 'krishna-7674733747',
      button: 'Register',
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScHTr68igEg2LS0WWe6sfIdGxBMX_pgic1yq5hfsgr9-ZgMpg/viewform' // Add register link for item 2
    },
    // Add register links for other items similarly
  ];

  return (
    <section id='Tech' className=" bg-gray-300 shadow-xl">
      <div className="container mx-auto p-9">
        <h2 className="text-3xl font-bold text-center text-gray-800 p-2 m-2 rounded-xl shadow-md border border-gray-100 hover:shadow-gray-800 transform hover:scale-105 transition duration-300 bg-gray-100">TECHNICAL <span className='text-red-600'>EVENTS</span></h2>      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mb-4">
          {techItems.map((item) => (
            <div key={item.id} className="shadow-xl hover:shadow-sky-500 shadow-sky-500/50 transition duration-300 mt-6 transform hover:scale-105 focus:outline-none bg-white rounded-2xl overflow-hidden  hover:shadow-xl">
              <img src={item.imageSrc} alt={item.title} className="w-full h-fit object-cover object-center" /> {/* Increase image size */}
              <div className="p-2">
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-gray-700">{item.contact}</p>
                <p className="text-gray-700">{item.contact2}</p>
                <div className="flex justify-between px-4">
                  <a href={item.registerLink} className="shadow-lg shadow-blue-400/50 hover:shadow-xl hover:shadow-blue-500/50 bg-blue-400 text-white px-6 py-3 rounded-2xl hover:bg-blue-600 transition duration-300 my-4 transform hover:scale-105 focus:outline-none ">
                    {item.button}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Tech;