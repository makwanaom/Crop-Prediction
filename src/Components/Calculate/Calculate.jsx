import React, { useEffect, useState } from 'react';
import './Calculate.css';
import axios from 'axios';

const Calculate = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [typecrop, setTypecrop] = useState('');
  const [amountgrown, setAmountgrown] = useState('');
  const [timetaken, setTimetaken] = useState('');
  const [plantingdate, setPlantingdate] = useState('');
  const [harvesting, setHarvesting] = useState('');
  const [location, setLocation] = useState('');
  const [additionalnotes, setAdditionalnotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      Number: number,
      Email: email,
      Typecrop: typecrop,
      Amountgrown: amountgrown,
      Timetaken: timetaken,
      Plantingdate: plantingdate,
      Harvesting: harvesting,
      Location: location,
      Additionalnotes: additionalnotes
    }
    axios.post("https://sheet.best/api/sheets/8fb6d8ea-6587-4b99-aac7-0a7f5dc77ded", data).then((response) => {
      console.log(response);
      setName('');
      setNumber('');
      setEmail('');
      setTypecrop('');
      setAmountgrown('');
      setTimetaken('');
      setPlantingdate('');
      setHarvesting('');
      setLocation('');
      setAdditionalnotes('');
    })
    alert("Submit Successfully!")
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className='calculate'>
      <h1>Here follow the steps.</h1>
      <div className='Nitrogen animate-on-scroll'>
        <h2>Nitrogen:</h2>
        <h4>1. Soil Sampling:</h4>
        <p>Collect soil samples from different locations and depths in your field to get a representative sample.</p>
        <h4>2. Sample Preparation:</h4>
        <p>Air-dry the soil samples and remove debris like stones and plant residues. Mix the samples thoroughly to create a composite sample.</p>
        <h4>3. Laboratory Testing:</h4>
        <p>Send the composite soil sample to a reputable agricultural laboratory for analysis. Request a soil nitrogen test, specifically for nitrate (NO3-) and ammonium (NH4+).</p>
        <h4>4. Interpret Results:</h4>
        <p>Review the lab report to understand the nitrogen levels in your soil. The lab results will provide the nitrogen content in parts per million (ppm) or as a percentage.</p>
        <h4>5.Recommendations:</h4>
        <p>Use the nitrogen level data to determine the appropriate amount of nitrogen fertilizer needed for optimal crop yield. Follow agronomic guidelines or consult with an agronomist for precise fertilizer application rates based on your crop type and soil conditions.</p>
        <br />
        <a href='https://youtu.be/YLTtBvsVze0?si=lpDTSmIBc8XSIeci'>Click here</a> to watch Video.
      </div>
      <br /><br />
      <div className='Potassium animate-on-scroll'>
        <h2>Potassium (K):-</h2>
        <p>To check the Potassium (K) level in soil, mix a soil sample with an extracting solution provided in a soil test kit, shake well, and let it settle. Add the reagent solution to the clear liquid, observe the color change, and compare it to the color chart to determine the potassium level.</p>
        <br />
        <a href='https://youtu.be/YLTtBvsVze0?si=lpDTSmIBc8XSIeci'>Click here</a> to watch Video.
      </div>
      <br /><br />
      <div className='Phosphorus animate-on-scroll'>
        <h2>Phosphorus (P):-</h2>
        <h4>1. Sample Preparation:</h4>
        <p>Collect soil samples from different garden areas, mix them in a clean container, and remove debris.</p>
        <h4>2. Testing:</h4>
        <p>Place a measured amount of soil into the test vial. Add the phosphorus extracting solution from the kit, shake well, and let it settle. Transfer the clear liquid to another vial, then add the reagent solution.</p>
        <h4>3.Results:</h4>
        <p>Observe the color change in the liquid. Compare the color to the provided chart to determine the phosphorus level.</p>
        <br />
        <a href='https://youtu.be/YLTtBvsVze0?si=lpDTSmIBc8XSIeci'>Click here</a> to watch Video.
      </div>
      <br /><br />
      <div className='Temperature animate-on-scroll'>
        <h2>Temperature (C):-</h2>
        <p>For checking temperature in soil soil temperature sensors can used. Soil temperature sensors come in a variety of designs using thermistors, thermocouples, thermocouple wires, and averaging thermocouples. The electrical signals transmitted from the sensors to our data loggers can be converted to different units of measurement, including °C , °F, and °K.</p>
        <br />
      </div>
      <br /><br />
      <div className='Humidity animate-on-scroll'>
        <h2>Humidity:-</h2>
        <h4>1. Weather Stations:</h4>
        <p>Use local weather stations or install a weather station on your farm to measure humidity.</p>
        <h4>2. Hygrometers:</h4>
        <p>Use portable hygrometers to measure the relative humidity directly in the field.</p>
        <br />
        <a href='https://youtu.be/Xg64TsUAFNE?si=QbIN5-h_m1uAtoUS'>Click here</a> to watch Video.
      </div>
      <br /><br />
      <div className='Soil-PH animate-on-scroll'>
        <h2>Soil pH :-</h2>
        <h4>1. Soil Sampling:</h4>
        <p>Collect soil samples from different parts of the field.</p>
        <h4>2. pH Meter:</h4>
        <p>Use a soil pH meter or pH test kit. Mix soil with distilled water in a 1:1 or 1:2 ratio (as per the kit instructions), let it settle, and measure the pH.</p>
        <h4>3. Laboratory Testing:</h4>
        <p>Send soil samples to a laboratory for a more accurate pH analysis.</p>
        <br />
        <a href='https://youtu.be/YLTtBvsVze0?si=lpDTSmIBc8XSIeci'>Click here</a> to watch Video.
      </div>
      <br /><br />
      <div className='Rainfall animate-on-scroll'>
        <h2>Rainfall:-</h2>
        <h4>1. Rain Gauges:</h4>
        <p>Install rain gauges at different locations on your farm to measure rainfall.</p>
        <h4>2. Weather Data:</h4>
        <p>Access local meteorological data from weather stations or online weather services for historical and current rainfall data.</p>
        <br />
      </div>
      <br /><br />
      <div className='Soil animate-on-scroll'>
        <h2>Soil Electrical Conductivity (EC):-</h2>
        <h4>1. Soil Sampling:</h4>
        <p>Collect soil samples from different parts of the field.</p>
        <h4>2. EC Meter:</h4>
        <p>Use a portable soil EC meter. Mix soil with distilled water in a specific ratio, let it settle, and measure the EC of the solution.</p>
        <h4>3. Laboratory Testing:</h4>
        <p>Send soil samples to a laboratory for detailed soil EC analysis.</p>
      </div>
      <br />
      <a href='https://youtu.be/U8_Eya_BrbA?si=OnynAEsEjuVa-u5P'>Click here</a> to watch Video.
      <br /><br />
      <div className='form-container animate-on-scroll'>
        <form onSubmit={handleSubmit}>
          <h2>Crop Yield Form</h2>
          
          <label>
            <input type="text" onChange={(e) =>setName(e.target.value)} value={name} name="farmerName" placeholder='Farmer Name' />
          </label>

          <label>
            <input type="text" onChange={(e) =>setNumber(e.target.value)} value={number} name="phoneNumber" placeholder="Phone Number" />
          </label>
          <label>
            <input type="email" onChange={(e) =>setEmail(e.target.value)} value={email} name="emailAddress" placeholder="Email Address" />
          </label>

          <label> 
            <input type="text" onChange={(e) =>setTypecrop(e.target.value)} value={typecrop} placeholder='Type of Crop' name="typecrop" />
          </label>

          <label>
            <input type="text" onChange={(e) =>setAmountgrown(e.target.value)} value={amountgrown} placeholder='Amount Grown (in kg)' name="amountGrown" />
          </label>

          <label>
            <input type="text" onChange={(e) =>setTimetaken(e.target.value)} value={timetaken} placeholder='Time Taken to Grow (in days)' name="timeTaken" />
          </label>
          <label>
            Planting Date
            <input type="date" onChange={(e) =>setPlantingdate(e.target.value)} value={plantingdate} name="plantingDate" />
          </label>
          <label>
            Harvesting Date:
            <input type="date" onChange={(e) =>setHarvesting(e.target.value)} value={harvesting} name="harvestingDate" />
          </label>
          <label>
            <input type="text" onChange={(e) =>setLocation(e.target.value)} value={location} placeholder='Region/Location' name="location" />
          </label>
          <label>
            <textarea placeholder='Additional Notes' onChange={(e) =>setAdditionalnotes(e.target.value)} value={additionalnotes} name="additionalNotes"></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
        <br />
        <p> <span className='privacy'>Privacy Notice:</span> Your data will be used solely for the purpose of addressing agricultural productivity and food security. It will be shared with the government to support efforts in achieving SDG 2: Zero Hunger.</p>
      </div>
    </div>
  );
};

export default Calculate;
