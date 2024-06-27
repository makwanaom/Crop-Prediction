import React, { useEffect, useRef } from 'react';
import "./Home.css";
import Crop from "../../assets/crop.jpg";
import Crop2 from "../../assets/crop2.jpg";
import Crop3 from "../../assets/crop3.jpg";

const Home = () => {
    const sliderRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        
    };

    useEffect(() => {
        const slider = sliderRef.current;
        let intervalId;

        const slide = () => {
            
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
                slider.scrollLeft = 0; 
            }else {
                slider.scrollLeft += slider.clientWidth; 
            }
        };

        intervalId = setInterval(slide, 3000);
        
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className='flex'>
            <div className='for-img'>
                <div ref={sliderRef} className='wrapper'>
                    <img className='img' src={Crop} alt="image here" />
                    <img className='img' src={Crop2} alt="image here" />
                    <img className='img' src={Crop3} alt="image here" />
                </div>
            </div>
            <div className='input-container'>

            <form onSubmit={handleSubmit}>
                    <input type="number" placeholder="Nitrogen (N)" required />
                    <input type="number" placeholder="Phosphorus (P)" required />
                    <input type="number" placeholder="Potassium (K)" required />
                    <input type="number" placeholder="Temperature (°C)" required />
                    <input type="number" placeholder="Humidity" required />
                    <input type="number" placeholder="pH" required />
                    <input type="number" placeholder="Rainfall" required />
                    <input type="number" placeholder="Soil EC" required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Home;
