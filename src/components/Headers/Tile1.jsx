import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Tile = () => {
  const [destination, setDestination] = useState('');
  const [person, setPerson] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const handleBookNow = () => {
    console.log('Booking now...');
  };
  const inputCss = {
    border: 'none',
    borderBottom: '2px solid #333', 
    outline: 'none',
    padding: '10px',
    fontSize: '16px',
    padding: '5px',
    color: '#000000',
    fontWeight: 'bold'
  };
  const CustomInput = ({ value, onClick }) => (
    <input
      type="text"
      placeholder="Select a date"
      value={value}
      onClick={onClick}
      style={{
        border: 'none',
        borderBottom: '2px solid #333',
        outline: 'none',
        padding: '10px',
        fontSize: '16px',
        fontWeight: 'bold'
      }}
    />
  );
  return (
    <div className="tile" style={{ background: 'white', padding: '15px', borderRadius: '8px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <div className="tileContent" style={{ display:'flex',flex: 1 ,flexDirection:'row'}}>
        
        <div style={{ margin:'10px',marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontWeight: 'bold', color: 'black', marginRight: '10px' }}>Destination:</span>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            style={inputCss}
          />
        </div>
        <div style={{ margin:'10px',marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontWeight: 'bold', color: 'black', marginRight: '10px' }}>Person:</span>
          <input
            type="text"
            value={person}
            onChange={(e) => setPerson(e.target.value)}
            style={inputCss}
          />
        </div>
        <div style={{ margin:'10px',marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontWeight: 'bold', color: 'black', marginRight: '10px' }}>Check-in Date:</span>
          <DatePicker
            selected={selectedDate1}
            onChange={(date) => setSelectedDate1(date)}
            customInput={<CustomInput />}
            placeholderText="Select a date"
            dateFormat="MM/dd/yyyy"
            isClearable
            showYearDropdown
            scrollableYearDropdown
          />
        </div>
        <div style={{ margin:'10px',marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontWeight: 'bold', color: 'black', marginRight: '10px' }}>Check-out Date:</span>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            customInput={<CustomInput />}
            placeholderText="Select a date"
            dateFormat="MM/dd/yyyy"
            isClearable
            showYearDropdown
            scrollableYearDropdown
          />
        </div>
        
      </div>
      <button className="bookNowButton" onClick={handleBookNow} style={{ background: 'darkorange', color: 'white', padding: '10px', borderRadius: '5px', fontWeight: 'bold' }}>
        Book Now
      </button>
    </div>
  );
};

export default Tile;
