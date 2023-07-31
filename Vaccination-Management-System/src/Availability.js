import React, { useState, useEffect } from 'react';
import { getallUsers } from './CrudCmps';
import './Availability.css'


export const Availability= () => {
  const [jsonData, setJsonData] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [vaccineAvailability, setVaccineAvailability] = useState('');

  useEffect(()=>
  {
    getData();
  },[])

  const getData=async ()=>{
    const response=await getallUsers('http://localhost:8000/cities')
    setJsonData(response.data);
    console.log(response.data);
  }

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    console.log(event.target.value);
    const StateName=event.target.value;
    const selectedStateObj = jsonData.find((state) => state.name == StateName )|| '';
    console.log(selectedStateObj);
    const availability = selectedStateObj.vaccine_available=="true"? 'Available' : 'Not Available';
    setVaccineAvailability(availability);
  };

  return (
    <div className='avail'>
      <h2 style={{color:"grey", margin:"20px"}}>Vaccine Availability</h2>
      <div className='Avail'>
        <label>Select State:</label>
        <select className='AvailSelect' value={selectedState} onChange={handleStateChange}>
          <option value="">---Select State---</option>
          {jsonData &&
            jsonData.map((state) => (
              <option key={state.id} value={state.name}>
                {state.name}
              </option>
            ))}
        </select>
      </div>
      {selectedState && (
        <div className='Avail2'>
          <p>Vaccination Availability in {selectedState}</p>
          {vaccineAvailability=="Available" && <h2>{vaccineAvailability}</h2>}
          {vaccineAvailability=="Not Available" && <h3>{vaccineAvailability}</h3>}
        </div>
      )}
    </div>
  );
};