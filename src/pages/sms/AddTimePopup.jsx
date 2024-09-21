import { useState } from 'react';
import './AddTimePopup.css'; 

const AddTimePopup = ({ onClose }) => {
    const [mode, setMode] = useState('dailyMax'); // Default to dailyMax mode

    const handleModeChange = (newMode) => {
        setMode(newMode);
    };
    
    const [startTime, setStartTime] = useState({ hours: '08', minutes: '00' });
    const [endTime, setEndTime] = useState({ hours: '09', minutes: '00' });
    const [primeTimeEnabled, setPrimeTimeEnabled] = useState(false);

    const handleStartTimeChange = (e) => {
        const { name, value } = e.target;
        setStartTime((prevStartTime) => ({
        ...prevStartTime,
        [name]: value,
        }));
    };

    const handleEndTimeChange = (e) => {
        const { name, value } = e.target;
        setEndTime((prevEndTime) => ({
        ...prevEndTime,
        [name]: value,
        }));
    };

    const handlePrimeTimeToggle = () => {
        setPrimeTimeEnabled(!primeTimeEnabled);
    };

    const handleSubmit = () => {
        // Handle form submission logic here
        console.log('Start Time:', startTime);
        console.log('Prime Time Enabled:', primeTimeEnabled);

        onClose(); // Close the popup
    };

    return (
        <div className="add-time-popup">
        <div className="popup-content">
            <h2>ADD TIME</h2>
            <div className="time-type-options">
            <div className="mode-selection">
        <button
            className={`mode-button ${mode === 'dailyMax' ? 'active' : ''}`}
            onClick={() => handleModeChange('dailyMax')}
            >
            Daily Max Operation Time
            </button>
            <button
            className={`mode-button ${mode === 'specific' ? 'active' : ''}`}
            onClick={() => handleModeChange('specific')}
            >
            Specific Time
            </button>
        </div>

        {mode === 'dailyMax' && (
            <div className="daily-max-mode">
            <p>
                In daily max operation time you only need to add start time
            </p>
            <div className="time-input">
                <input
                    type="number"
                    name="hours"
                    id="hours"
                    value={startTime.hours}
                    onChange={handleStartTimeChange}
                    min="00"
                    max="23"
                />
                :
                <input
                    type="number"
                    name="minutes"
                    id="minutes"
                    value={startTime.minutes}
                    onChange={handleStartTimeChange}
                    min="00"
                    max="59"
                />
            </div>
            <div className="prime-time">
                <label htmlFor="prime-time-toggle">
                    Set Your Prime Time
                    {/* <span className="info-icon">i</span> */}
                </label>
                <input
                    type="checkbox"
                    id="prime-time-toggle"
                    checked={primeTimeEnabled}
                    onChange={handlePrimeTimeToggle}
                />
                {primeTimeEnabled && (
                    <p className="prime-time-message">
                    Your Prime Time is 9:00 PM! Explore Blast Insight for more
                    in-depth analysis
                    </p>
                )}
            </div>
            </div>
        )}

        {mode === 'specific' && (
            <div className="specific-mode">
            <p>In specific time you need to add start and end time</p>
            <div className="time-input">
                <label>Start Time</label>
                <input
                    type="number"
                    name="hours"
                    id="hours"
                    value={startTime.hours}
                    onChange={handleStartTimeChange}
                    min="00"
                    max="23"
                />
                :
                <input
                    type="number"
                    name="minutes"
                    id="minutes"
                    value={startTime.minutes}
                    onChange={handleStartTimeChange}
                    min="00"
                    max="59"
                />
            </div>
            <div className="time-input">
                <label>End Time</label>
                <input
                    type="number"
                    name="hours"
                    id="hours"
                    value={endTime.hours}
                    onChange={handleEndTimeChange}
                    min="00"
                    max="23"
                />
                :
                <input
                    type="number"
                    name="minutes"
                    id="minutes"
                    value={endTime.minutes}
                    onChange={handleEndTimeChange}
                    min="00"
                    max="59"
                />
            </div>
            <div className="prime-time">

                <label htmlFor="prime-time-toggle">
                    Set Your Prime Time
                    {/* <span className="info-icon">i</span> */}
                </label>
                <input
                    type="checkbox"
                    id="prime-time-toggle"
                    checked={primeTimeEnabled}
                    onChange={handlePrimeTimeToggle}
                />
                {primeTimeEnabled && (
                    <p className="prime-time-message">
                    Your Prime Time is 9:00 PM! Explore Blast Insight for more
                    in-depth analysis
                    </p>
                )}
            </div>
            </div>
        )}
            </div>
            <div className="button-container">
            <button onClick={onClose} className="cancel-button">
                X Cancel
            </button>
            <button onClick={handleSubmit} className="add-button">
                <span className="clock-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-clock"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2.5a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                </svg>
                </span>
                Add
            </button>
            </div>
        </div>
        </div>
    );
};

export default AddTimePopup;
