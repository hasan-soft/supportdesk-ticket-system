import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Problem from "./components/Problem";
import Footer from "./components/Footer";
import { ToastContainer} from 'react-toastify';

function App() {
    const [count, setCount] = useState(0);
    const [solveCount, setsolveCount] = useState(0);

    const handleCardClick = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleComplete = () => {
        setCount(prevCount => Math.max(0, prevCount - 1));
        setsolveCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <Navbar />
            <Banner count={count} solveCount={solveCount} />
            <Problem onCardClick={handleCardClick} onComplete={handleComplete} />
            <Footer />
            <ToastContainer />
        </div>
    );
}

export default App;