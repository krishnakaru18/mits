import { paper } from '../assets'
import { poster } from '../assets'
import { project } from '../assets'
import { quiz } from '../assets'
import { Think } from '../assets'


const NonTech = () => {
  const techItems = [
    {
      id: 1,
      imageSrc: paper,
      title: 'Tech Item 1',
      description: 'Description for Tech Item 1',
      button: 'Register',
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScHTr68igEg2LS0WWe6sfIdGxBMX_pgic1yq5hfsgr9-ZgMpg/viewform' // Add register link for item 1
    },
    {
      id: 2,
      imageSrc: poster,
      title: 'Tech Item 2',
      description: 'Description for Tech Item 2',
      button: 'Register',
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScHTr68igEg2LS0WWe6sfIdGxBMX_pgic1yq5hfsgr9-ZgMpg/viewform' // Add register link for item 2
    },
    // Add register links for other items similarly
    {
      id: 3,
      imageSrc: project,
      title: 'Tech Item 3',
      description: 'Description for Tech Item 3',
      button: 'Register',
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScHTr68igEg2LS0WWe6sfIdGxBMX_pgic1yq5hfsgr9-ZgMpg/viewform' // Add register link for item 1
    },
    {
      id: 4,
      imageSrc: quiz,
      title: 'Tech Item 2',
      description: 'Description for Tech Item 2',
      button: 'Register',
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScHTr68igEg2LS0WWe6sfIdGxBMX_pgic1yq5hfsgr9-ZgMpg/viewform' // Add register link for item 2
    },
    // Add register links for other items similarly
    {
      id: 5,
      imageSrc: Think,
      title: 'Tech Item 1',
      description: 'Description for Tech Item 1',
      button: 'Register',
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScHTr68igEg2LS0WWe6sfIdGxBMX_pgic1yq5hfsgr9-ZgMpg/viewform' // Add register link for item 1
    },
    {
      id: 6,
      imageSrc: paper,
      title: 'Tech Item 2',
      description: 'Description for Tech Item 2',
      button: 'Register',
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScHTr68igEg2LS0WWe6sfIdGxBMX_pgic1yq5hfsgr9-ZgMpg/viewform' // Add register link for item 2
    },
    // Add register links for other items similarly
  ];

  return (
    <section id='non' className="m-2 rounded-2xl bg-white shadow-xl">
      <div className="container mx-auto p-7">
      <h2 className="text-3xl font-bold text-center text-gray-800 p-2 m-2 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transform hover:scale-105 transition duration-300 bg-gray-100">NON-TECHNICAL <span className='text-red-600'>EVENTS</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techItems.map((item) => (
            <div key={item.id} className="hover:bg-white transition duration-300 mt-6 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 bg-white rounded-lg overflow-hidden shadow-md">
              <img src={item.imageSrc} alt={item.title} className="w-full h-90 object-cover object-center" /> {/* Increase image size */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="flex justify-between">
                  <a href={item.registerLink} className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition duration-300 mt-6 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                    {item.button}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NonTech;

