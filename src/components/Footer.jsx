import { FaInstagram, FaLinkedin, FaWhatsapp, FaUniversity, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer' className="bg-black text-white py-8">
      <div className="container mx-auto px-4 mb-9">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-slate-300">One-day National Level Technical Symposium named "ECLECTICA 2K24," hosted by the Department of ECE .</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#home" className="text-gray-400 hover:text-white px-3 py-2 rounded-md transition duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white px-3 py-2 rounded-md transition duration-300">About Event</a></li>
              <li><a href="#Tech" className="text-gray-400 hover:text-white px-3 py-2 rounded-md transition duration-300">Tech</a></li>
              <li><a href="#non" className="text-gray-400 hover:text-white px-3 py-2 rounded-md transition duration-300">Non-Tech</a></li>
              <li><a href="#com" className="text-gray-400 hover:text-white px-3 py-2 rounded-md transition duration-300">Committee</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">krih-767656565</p>
            <p className="text-gray-300">hhhuy-7665544443</p>
            <p className="text-gray-300">Phone: +1234567890</p>
            {/* Added name and phone number */}
            <p className="text-gray-300">John Doe - +1234567890</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center">
              <a href="https://www.instagram.com/eclectica2k24__mits/" className="shadow-xl rounded-lg   shadow-red-500/50 text-red-400 hover:text-red-600 mr-4 transition duration-300 ease-in-out transform hover:scale-110">
                <FaInstagram size={32} />
              </a>
              <a href="#" className="shadow-xl rounded-lg   shadow-blue-500/50 text-blue-400 hover:text-blue-600 mr-4 transition duration-300 ease-in-out transform hover:scale-110">
                <FaLinkedin size={32} />
              </a>
              <a href="#" className="shadow-xl rounded-2xl   shadow-green-500/50 text-green-400 hover:text-green-600 mr-4 transition duration-300 ease-in-out transform hover:scale-110">
                <FaWhatsapp size={32} />
              </a>
              <a href="https://mits.ac.in/" className="shadow-xl rounded-lg  shadow-yellow-500/50 text-yellow-500 hover:text-yellow-400 mr-4 transition duration-300 ease-in-out transform hover:scale-110">
                <FaUniversity size={32} />
              </a>
              <a href="#" className="shadow-xl rounded-xl  shadow-blue-500/50 text-blue-400 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110">
                <FaFacebook size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-600 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-slate-100"> &copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
