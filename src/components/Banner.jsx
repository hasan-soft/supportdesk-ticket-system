import vector1 from "../assets/vector1.png";
import Container from './Container';

const Banner = ({ count, resolvedCount }) => {
    return (
        <div className="bg-[#f5f5f5]">
            <Container>
                <div className="grid md:grid-cols-2 gap-5 py-20 px-5">
                    <div className="relative bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-md p-7 h-[250px] flex flex-col items-center justify-center">
                        <h2 className="text-white text-xl font-medium mb-3 z-10">In-Progress</h2>
                        <p className="text-3xl text-white font-bold z-10">{count}</p>
                        <div className="absolute left-0 bottom-0 h-full w-full bg-no-repeat z-0" style={{ backgroundImage: `url(${vector1})` }}></div>
                        <div className="absolute right-0 bottom-0 rotate-y-180 h-full w-full bg-no-repeat z-0" style={{ backgroundImage: `url(${vector1})` }}></div>
                    </div>
                    <div className="relative bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-md p-7 h-[250px] flex flex-col items-center justify-center">
                        <h2 className="text-white text-xl font-medium mb-3 z-10">Resolved</h2>
                        <p className="text-3xl text-white font-bold z-10">{resolvedCount}</p>
                        <div className="absolute left-0 bottom-0 h-full w-full bg-no-repeat z-0" style={{ backgroundImage: `url(${vector1})` }}></div>
                        <div className="absolute right-0 bottom-0 rotate-y-180 h-full w-full bg-no-repeat z-0" style={{ backgroundImage: `url(${vector1})` }}></div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;