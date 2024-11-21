import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-gray-300">
      <footer className="container mx-auto p-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h6 className="text-lg font-semibold text-yellow-500">
              SHOPPING GUIDE
            </h6>
            <ul>
              <li className="mt-2">
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-white">
                  Payment
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-white">
                  Shipment
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-white">
                  Where is my order?
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-white">
                  Return Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-semibold text-yellow-500">
              STYLE ADVISOR
            </h6>
            <ul>
              <li className="mt-2">
                <a href="#" className="hover:text-white">
                  Your Account
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-white">
                  Information
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-white">
                  Addresses
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-white">
                  Discount
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-white">
                  Orders History
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-white">
                  Order Tracking
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-semibold text-yellow-500">
              INFORMATION
            </h6>
            <ul>
              <li className="mt-2">
                <a href="#" className="hover:text-white">
                  Site Map
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-white">
                  Search Terms
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-white">
                  Advanced Search
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-white">
                  Suppliers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-semibold text-yellow-500">
              CONTACT US
            </h6>
            <p className="mt-2">Mr. Fashion, 789 Main Rd, Anytown, CA 12345 USA</p>
            <p className="mt-2">+888 456-7890</p>
            <p className="mt-2">mrfashion@klbtheme.com</p>
            <div className="flex gap-4 mt-4">
              <FaFacebookF className="text-2xl cursor-pointer bg-blue-500 text-white p-1 rounded h-8 w-8  hover:text-white" />
              <FaTwitter className="text-2xl cursor-pointer bg-[#1da1f2] text-white p-1 rounded h-8 w-8 hover:text-white" />
              <FaGooglePlusG className="text-2xl cursor-pointer bg-[#dd4b39] text-white p-1 rounded h-8 w-8 hover:text-white" />
              <FaPinterestP className="text-2xl cursor-pointer bg-[#e60023] text-white p-1 rounded h-8 w-8 hover:text-white" />
              <FaLinkedinIn className="text-2xl cursor-pointer bg-[#0a66c2] text-white p-1 rounded h-8 w-8 hover:text-white" />
              <FaYoutube className="text-2xl cursor-pointer bg-[#ff0000] text-white p-1 rounded h-8 w-8 hover:text-white" />
            </div>
          </div>
        </div>
      </footer>
      <footer>
        <hr />
        <div className="text-center mt-10 pb-10">
          <p>© 2024 MR FASHION. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
