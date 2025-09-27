import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Problem from "./components/Problem";
import Footer from "./components/Footer";
import { ToastContainer} from 'react-toastify';

function App() {
    const [count, setCount] = useState(0);
    const [resolvedCount, setResolvedCount] = useState(0);

    const handleCardClick = () => {
        console.log("App handleCardClick called, increasing count");
        setCount(prevCount => prevCount + 1);
    };

    const handleComplete = () => {
        console.log("App handleComplete called, reducing count and increasing resolvedCount");
        setCount(prevCount => Math.max(0, prevCount - 1));
        setResolvedCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <Navbar />
            <Banner count={count} resolvedCount={resolvedCount} />
            <Problem onCardClick={handleCardClick} onComplete={handleComplete} />
            <Footer />
            <ToastContainer />
        </div>
    );
}

export default App;