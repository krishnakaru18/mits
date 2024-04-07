
import { FaInstagram, FaLinkedin, FaWhatsapp, FaUniversity, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer' className="m-2 rounded-2xl bg-black text-white py-8 shadow-xl">
      <div className="container mx-auto px-4 mb-9">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-slate-300">ECLECTICA is a departmental technical event organized every year to compete with aspiring minds and learn through communication and participation.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="" className="text-gray-400 hover:text-white px-3 py-2 rounded-md transition duration-300">Home</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white px-3 py-2 rounded-md transition duration-300">About Us</a></li>
              <li><a href="#Tech" className="text-gray-400 hover:text-white px-3 py-2 rounded-md transition duration-300">Tech</a></li>
              <li><a href="#non" className="text-gray-400 hover:text-white px-3 py-2 rounded-md transition duration-300">Non-Tech</a></li>
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
              <a href="https://www.instagram.com/eclectica2k24__mits/" className="text-gray-400 hover:text-white mr-4 transition duration-300 ease-in-out transform hover:scale-110">
                <FaInstagram size={32} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white mr-4 transition duration-300 ease-in-out transform hover:scale-110">
                <FaLinkedin size={32} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white mr-4 transition duration-300 ease-in-out transform hover:scale-110">
                <FaWhatsapp size={32} />
              </a>
              <a href="https://mits.ac.in/" className="text-gray-400 hover:text-white mr-4 transition duration-300 ease-in-out transform hover:scale-110">
                <FaUniversity size={32} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-110">
                <FaFacebook size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400"> &copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
