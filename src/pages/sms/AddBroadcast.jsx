import { useState } from 'react';
import "./AddBroadcast.css"
import AddTimePopup from './AddTimePopup';

function AddBroadcast() {
    const [broadcastName, setBroadcastName] = useState('');
    const [contact] = useState('');
    const [contactGroup, setContactGroup] = useState('');
    const [message, setMessage] = useState('');
    const [template, setTemplate] = useState('');
    const [schedule, setSchedule] = useState({
        startDate: '',
        endDate: '',
        dailyMaxTime: {
        hours: '',
        minutes: '',
        },
        timeSlots: [],
    });

    const handleBroadcastNameChange = (event) => {
        setBroadcastName(event.target.value);
    };

    const handleContactGroupChange = (event) => {
        setContactGroup(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleTemplateChange = (event) => {
        setTemplate(event.target.value);
    };

    const handleStartDateChange = (event) => {
        setSchedule({
        ...schedule,
        startDate: event.target.value,
        });
    };

    const handleDailyMaxTimeChange = (event) => {
        const [hours, minutes] = event.target.value.split(':');
        setSchedule({
        ...schedule,
        dailyMaxTime: {
            hours: hours.trim(),
            minutes: minutes.trim(),
        },
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic
        console.log('Form submitted:', {
        broadcastName,
        contact,
        contactGroup,
        message,
        template,
        schedule,
        });
    };

    const [isPrimeTimeEnabled, setIsPrimeTimeEnabled] = useState(true);

    const handleTogglePrimeTime = () => {
        setIsPrimeTimeEnabled(!isPrimeTimeEnabled);
    };

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };


    return (
        <div className="container">
        <h1>Add SMS Broadcast Scheduler</h1>
        <form onSubmit={handleSubmit}>
            <button type="submit" className="btn btn-primary">
                Start Broadcast
            </button>
            <button type="reset" className="btn btn-secondary">
                Reset
            </button>
            <div className="form-group">
            <label htmlFor="broadcastName">Broadcast Name:</label>
            <input
                type="text"
                className="form-control"
                id="broadcastName"
                value={broadcastName}
                onChange={handleBroadcastNameChange}
            />
            </div>
            <div className='form-row'>
                <div className="form-group">
                <label htmlFor="contactGroup">Choose contact group:</label>
                <select
                    className="form-control"
                    id="contactGroup"
                    value={contactGroup}
                    onChange={handleContactGroupChange}
                >
                    <option value="">Select a group</option>
                    {/* Add options for contact groups */}
                </select>
                </div>
                <div className="form-group">
                <label htmlFor="template">Template:</label>
                <select
                    className="form-control"
                    id="template"
                    value={template}
                    onChange={handleTemplateChange}
                >
                    <option value="">Select a template</option>
                    {/* Add options for templates */}
                </select>
                </div>
            </div>
            <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
                className="form-control"
                id="message"
                value={message}
                onChange={handleMessageChange}
            />
            </div>
            <div className="form-group">
            <h2>Schedule</h2>
            <div className="form-row-schedule">
                <div className="form-group col-md-6">
                <label htmlFor="startDate">Select Date:</label>
                <input
                    type="date"
                    className="form-control"
                    id="startDate"
                    value={schedule.startDate}
                    onChange={handleStartDateChange}
                />
                </div>
                <div className="form-group col-md-6">
                <label htmlFor="dailyMaxTime">Set Daily Max Operation Time:</label>
                <input
                    type="text"
                    className="form-control"
                    id="dailyMaxTime"
                    value={`${schedule.dailyMaxTime.hours}:${schedule.dailyMaxTime.minutes}`}
                    onChange={handleDailyMaxTimeChange}
                    placeholder="HH:MM"
                />
                </div>
                <div className="form-group col-md-6">
                    <div className="header-prime-time">
                        <p>Set Your Prime Time</p>
                        {/* <span className="info-icon">i</span> */}
                    </div>
                    <div className="toggle-container">
                        <label className="switch">
                        <input
                            type="checkbox"
                            checked={isPrimeTimeEnabled}
                            onChange={handleTogglePrimeTime}
                        />
                        <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="prime-time">
                        {isPrimeTimeEnabled ? (
                        <p>Your Prime Time is 9:00 PM!</p>
                        ) : (
                        <p>Prime Time is not enabled.</p>
                        )}
                    </div>
                    <div className="explore-link">
                        <p>Explore Blast Insight for more in-depth analysis</p>
                    </div>
                    </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                <label htmlFor="timeSlots">Add Time Slots:</label>
                <button className='add-button' onClick={openPopup}>Add Time</button>
                {isPopupOpen && <AddTimePopup onClose={closePopup} />}
                </div>
            </div>
            {/* Display added time slots */}
            </div>
        </form>
        </div>
    );
}

export default AddBroadcast;
