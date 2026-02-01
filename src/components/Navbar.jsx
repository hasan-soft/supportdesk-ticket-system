import Container from './Container';
import logo from "../assets/logo.png";
const Navbar = () => {
    return (
        <div className=" bg-white border-b-2 border-gray-200">
            <Container>
                {/* menu area */}
                <nav className="px-5 py-4 flex items-center justify-between">
                    <a href="#">
                        <img src={logo} alt="Logo" className='' />
                    </a>
                    <div className="md:flex hidden items-center ml-auto gap-6">
                        <a href="#" className="text-gray-600">Home</a>
                        <a href="#" className="text-gray-600">FAQ</a>
                        <a href="#" className="text-gray-600">Changelog</a>
                        <a href="#" className="text-gray-600">Blog</a>
                        <a href="#" className="text-gray-600">Download</a>
                        <a href="#" className="text-gray-600">Contact</a>
                    </div>
                    {/* button right */}
                    <div className="ml-10">
                        <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-md hover:cursor-pointer">
                            + New Ticket
                        </button>
                    </div>
                </nav>
            </Container>
        </div>
    );
};
export default Navbar;