import { useState, useEffect } from "react";
import { FaCircle } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import Container from './Container';
import { toast } from "react-toastify";

const Problem = ({ onCardClick, onComplete }) => {
    const [tickets, setTickets] = useState([]);
    const [selectedTickets, setSelectedTickets] = useState([]);
    const [resolvedTickets, setResolvedTickets] = useState([]);

    useEffect(() => {
        fetch("/ticket.json")
            .then((res) => res.json())
            .then((data) => {
                const updatedTickets = data.map(ticket => ({ ...ticket, status: "Open" }));
                console.log("Loaded tickets:", updatedTickets);
                setTickets(updatedTickets);
            })
            .catch((error) => console.error("Error loading tickets:", error));
    }, []);

    useEffect(() => {}, [tickets]);

    const handleStatusToggle = (ticketId) => {
        console.log("Toggling status for ticket ID:", ticketId);
        setTickets(tickets.map((ticket) => {
            if (ticket.id === ticketId && ticket.status === "Open") {
                console.log(`Changing ticket ${ticketId} status to: In Progress`);
                return { ...ticket, status: "In Progress" };
            }
            return ticket;
        }));
    };

    const handleCardClick = (ticket) => {
        console.log("Card clicked for ticket ID:", ticket.id);
        if (ticket.status === "Open") {
            handleStatusToggle(ticket.id);
            onCardClick();
            toast.success("In-Progress");
        }
        const latestTicket = tickets.find((t) => t.id === ticket.id) || ticket;
        if (!selectedTickets.some((t) => t.id === ticket.id)) {
            setSelectedTickets([...selectedTickets, { ...latestTicket, status: ticket.status === "Open" ? "In Progress" : latestTicket.status }]);
        }
    };

    const handleComplete = (ticketId) => {
        console.log("Complete button clicked for ticket ID:", ticketId);
        const ticketToResolve = selectedTickets.find((t) => t.id === ticketId);
        if (ticketToResolve) {
            setResolvedTickets([...resolvedTickets, ticketToResolve]);
            setSelectedTickets(selectedTickets.filter((t) => t.id !== ticketId));
            setTickets(tickets.filter((t) => t.id !== ticketId));
            onComplete();
            toast.success("Completed!");
            console.log(`Ticket ${ticketId} removed from tickets and moved to Resolved Task with status: ${ticketToResolve.status}`);
        }
    };

    return (
        <div className="bg-[#f5f5f5]">
            <Container>
                <div className="md:flex">
                    <div className="w-full">
                        <h2 className="px-5 font-semibold text-2xl mb-4 text-[#34485A]">Customer Tickets</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 px-5 pb-10">
                            {tickets.map((ticket) => (
                                <div key={ticket.id} className="rounded-md">
                                    <div className="left-area pb-5">
                                        <div onClick={() => handleCardClick(ticket)} className="card-item cursor-pointer bg-white shadow-md p-4 rounded-md">
                                            <div>
                                                <div className='flex justify-between items-center mb-2'>
                                                    <h3 className='text-sm md:text-xl font-medium text-[#001931] mb-3'>{ticket.title}</h3>
                                                    <div className={`flex items-center justify-center font-semibold px-4 py-1 rounded-full
                                                            ${ticket.status === "In Progress" ? "bg-[#f8f3b9] text-[#9c7700]" : "bg-[#b9f8cf] text-[#0b5e06]"}`}>
                                                        <span className="mr-1">
                                                            <FaCircle size={20} color={ticket.status === "In Progress" ? "#febb0c" : "#02A53B"}/>
                                                        </span>
                                                        <span>{ticket.status}</span>
                                                    </div>
                                                </div>
                                                <p className='text-[#627382] text-sm md:text-base mb-3'>{ticket.description}</p>
                                                <div className='flex justify-between'>
                                                    <div className='flex items-center'>
                                                        <p className='text-[#627382] text-lg mr-2'>#100{ticket.id}</p>
                                                        <span className={`font-medium uppercase text-xs md:text-base py-1 px-2 mr-2 ${ticket.priority === "High"? "text-[#F83044]": ticket.priority === "Medium"? "text-[#FEBB0C]": "text-[#02A53B]"}`}>{ticket.priority} PRIORITY</span>
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <p className='text-[#627382] text-sm mr-4'>{ticket.customer}</p>
                                                        <div className="date flex items-center justify-center text-[#627382] text-sm">
                                                            <span className='mr-2'><FaCalendarAlt size={15} color="#627382" /></span>
                                                            <p>{ticket.createdAt}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:w-1/4 ml-5 md:ml-0 pl-3 pr-5 pb-20">
                        <div className="mb-3">
                            <h2 className="font-semibold text-2xl mb-4 text-[#34485A]">Task Status</h2>
                        </div>
                        <div className="">
                            {selectedTickets.length > 0 && (
                                selectedTickets.map((ticket) => (
                                    <div key={ticket.id}className="bg-white shadow-md p-4 rounded-md mb-4">
                                        <h3 className="text-lg font-medium text-[#001931] mb-2">{ticket.title}</h3>
                                        <button className="bg-[#02A53B] w-full text-white font-semibold py-2 rounded-md cursor-pointer"onClick={() => handleComplete(ticket.id)}>Complete</button>
                                    </div>
                                ))
                            )}
                            {selectedTickets.length === 0 && (
                                <p className="text-[#627382]">Select a ticket to add to Task Status</p>
                            )}
                        </div>
                        <div className="mt-7">
                            <h2 className="font-semibold text-2xl mb-4 text-[#34485A]">Resolved Task</h2>
                            {resolvedTickets.length > 0 ? (resolvedTickets.map((ticket) => (
                                <div key={ticket.id}className="bg-[#E0E7FF] shadow-md p-4 rounded-md mb-4"><h3 className="text-lg font-medium text-[#001931] mb-2">{ticket.title}</h3>
                                </div>
                                ))
                            ) : (
                                <p className="text-[#627382]">No resolved tasks yet.</p>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Problem;