import Container from './Container';
const Navbar = () => {
    return (
        <div className=" bg-white border-b-2 border-gray-200">
            <Container>
                {/* menu area */}
                <nav className="px-5 py-4 flex justify-between items-center">
                    <a href="#" className="md:text-xl text-lg font-bold">CS — Ticket System</a>
                    <div className="md:flex hidden items-center ml-auto gap-6">
                        <a href="#" className="text-gray-600">
                            Home
                        </a>
                        <a href="#" className="text-gray-600">
                            FAQ
                        </a>
                        <a href="#" className="text-gray-600">
                            Changelog
                        </a>

                        <a href="#" className="text-gray-600">
                            Blog
                        </a>
                        <a href="#" className="text-gray-600">
                            Download
                        </a>
                        <a href="#" className="text-gray-600">
                            Contact
                        </a>
                    </div>
                    {/* button right */}
                    <div className="ml-5">
                        <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-1 rounded-md hover:cursor-pointer">
                            + New Ticket
                        </button>
                    </div>
                </nav>
            </Container>
        </div>
    );
};
export default Navbar;