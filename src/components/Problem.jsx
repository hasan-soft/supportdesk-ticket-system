import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import Container from './Container';

const Problem = () => {
    return (
        <div className='bg-[#f5f5f5]'>
            <Container>
                <div className='px-5 pb-16'>
                    <div className="title-head">
                        <h2 className='text-3xl font-semibold text-[#34485A] mb-7'>Customer Tickets</h2>
                    </div>
                    <div className="card">
                        <div className="card-item shadow-md p-4 bg-white rounded-md mb-5">
                            <div className='flex justify-between items-center'>
                                <h3 className='text-2xl font-medium text-[#001931] mb-3'>Login issues - Can't Access Account</h3>
                                <button className='bg-[#b9f8cf] flex items-center justify-center font-semibold px-4 py-1 rounded-full text-[#0b5e06]'><span className='mr-1'><FaCircle size={20} color="#02A53B" /></span>Open</button>
                            </div>
                            <p className='text-[#627382] text-lg mb-3'>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
                            <div className='flex justify-between'>
                                <div className='flex items-center'><p className='text-[#627382] text-lg mr-2'>#1001</p><span className='font-bold uppercase text-[#f83044] text-sm'>HIGH PRIORITY</span></div>
                                <div className='flex items-center'>
                                    <p className='text-[#627382] text-sm mr-2'>John Smith</p>
                                    <div className="date flex items-center justify-center text-[#627382] text-sm">
                                        <span className='mr-1'><FaCalendarAlt size={15} color="#627382" /></span>
                                        <p>1/15/2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Problem;