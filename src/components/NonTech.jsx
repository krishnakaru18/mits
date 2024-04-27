import { find } from '../assets';
import { photo } from '../assets';
import { pose } from '../assets';
import { Hand } from '../assets';

const NonTech = () => {
  const techItems = [
    {
      id: 1,
      imageSrc: Hand,
      title: 'HAND CRAFTS',
      description: 'Registration Fee : 50 RS/-',
      contact: '',
      contact2: 'C. Sarika - 9866722493',
      button: 'Register',
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScHTr68igEg2LS0WWe6sfIdGxBMX_pgic1yq5hfsgr9-ZgMpg/viewform' // Add register link for item 1
    },
    {
      id: 2,
      imageSrc: photo,
      title: 'Tech Item 1',
      description: 'hivbbvhbfvf',
      contact: 'krishna-7674733747',
      contact2: 'krishna-7674733747',
      button: 'Register',
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScHTr68igEg2LS0WWe6sfIdGxBMX_pgic1yq5hfsgr9-ZgMpg/viewform' // Add register link for item 2
    },
    // Add register links for other items similarly
    {
      id: 3,
      imageSrc: photo,
      title: 'PHOTOGRAPHY',
      description: 'hivbbvhbfvf',
      contact: 'krishna-7674733747',
      contact2: 'krishna-7674733747',
      button: 'Register',
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScHTr68igEg2LS0WWe6sfIdGxBMX_pgic1yq5hfsgr9-ZgMpg/viewform' // Add register link for item 1
    },
    {

      id: 4,
      imageSrc: find,
      title: 'CAN YOU FIND ME',
      description: 'Registration Fee : 50 RS/-',
      contact: 'R.Poojitha - 995985381',
      contact2: '',
      button: 'Register',
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScHTr68igEg2LS0WWe6sfIdGxBMX_pgic1yq5hfsgr9-ZgMpg/viewform' // Add register link for item 2
    },
    // Add register links for other items similarly
    {
      id: 5,
      imageSrc: pose,
      title: 'LOCK THE POSE',
      description: 'Registration Fee : 50 RS/-',
      contact: 'G.Thanusree-6302929091',
      contact2: '',
      button: 'Register',
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScHTr68igEg2LS0WWe6sfIdGxBMX_pgic1yq5hfsgr9-ZgMpg/viewform' // Add register link for item 1
    },

    // Add register links for other items similarly
  ];

  return (
    <section id='non' className=" bg-gray-200 shadow-xl">
      <div className="container mx-auto p-9">
        <h2 className="text-3xl font-bold text-center text-gray-800 p-2 m-2 rounded-xl shadow-md border border-gray-100 hover:shadow-gray-800 transform hover:scale-105 transition duration-300 bg-gray-100">NON-TECHNICAL <span className='text-red-600 hover:underline'>EVENTS</span></h2>      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-9">
          {techItems.map((item) => (
            <div key={item.id} className="shadow-xl hover:shadow-sky-500 shadow-sky-500 transition duration-300 mt-6 transform hover:scale-105 focus:outline-none bg-white rounded-2xl overflow-hidden  hover:shadow-xl">
              <img src={item.imageSrc} alt={item.title} className="w-full h-fit object-cover object-center" /> {/* Increase image size */}
              <div className="p-4">
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-gray-700">{item.contact}</p>
                <p className="text-gray-700">{item.contact2}</p>
                <div className="flex justify-between px-4">
                  <a href={item.registerLink} className="shadow-lg shadow-blue-400 hover:shadow-2xl hover:shadow-blue-500/50 bg-blue-400 text-white px-6 py-3 rounded-2xl hover:bg-blue-600 transition duration-300 my-4 transform hover:scale-105 focus:outline-none ">
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

export default NonTech;