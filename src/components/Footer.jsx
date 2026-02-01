import { MdOutlineFacebook } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-8 pt-12">
      <Container>
        <div className="grid md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Support-Desk — Ticket System
            </h3>
            <p className="text-sm">
              The Support-Desk — Ticket System is a software platform primarily designed to manage customer support. It allows users to submit their issues, complaints, or requests, which are referred to as “ticket.” Each ticket is assigned a unique ID for tracking purposes, enabling the support team to monitor which issues have been resolved.
            </p>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-1 text-base">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Mission</a></li>
              <li><a href="#">Contact Administrator</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-1 text-base">
              <li><a href="#">Education & Services</a></li>
              <li><a href="#">Student Stories</a></li>
              <li><a href="#">Download Apps</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Information</h4>
            <ul className="space-y-1 text-base">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Join Us</a></li>
            </ul>
          </div>
          {/* social links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Social Links</h4>
            <ul className="space-y-1 text-base">
              <li className='flex items-center cursor-pointer'><span className='mr-1'><FaSquareXTwitter size={20} color="white" /></span>@Support-Desk — Ticket System</li>
              <li className='flex items-center cursor-pointer'><span className='mr-1'><FaLinkedin size={20} color="white" /></span>@Support-Desk — Ticket System</li>
              <li className='flex items-center cursor-pointer'><span className='mr-1'><MdOutlineFacebook size={20} color="white" /></span>@Support-Desk — Ticket System</li>
              <li className='flex items-center cursor-pointer'><span className='mr-1'><MdEmail size={20} color="white" /></span>support@support-desk.com</li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-20 pb-7">
          <p className="text-white text-sm md:text-base">© 2025 Support-Desk — Ticket System. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;