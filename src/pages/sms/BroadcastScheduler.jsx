import { useState } from 'react';
import './BroadcastScheduler.css';
import { useNavigate } from 'react-router-dom';

const BroadcastScheduler = () => {
    let navigate = useNavigate();
    const [campaigns, setCampaigns] = useState([]);

    const handleAddCampaign = () => {
        navigate('/addscheduler');
    };

    const handleDeleteCampaign = (index) => {
        // Remove a campaign from the campaigns array at the specified index
    };

    const handleEditCampaign = (index) => {
        // Edit a campaign in the campaigns array at the specified index
    };

    return (
        <div className="sms-campaign-scheduler">
        <div className="header-scheduler">
            <h1>SMS Campaign Scheduler</h1>
            <div className="quota">
            Remaining Quota: 10 | Expired on 30th September 2024
            </div>
        </div>
        <div className="actions">
            <button className="refresh-button">Refresh</button>
            <button className="add-button" onClick={handleAddCampaign}>
            Add SMS Broadcast Scheduler
            </button>
        </div>
        <div className="filter">
            <select className="filter-dropdown">
            <option value="all">all</option>
            {/* Add more options for filtering */}
            </select>
            <input type="date" className="filter-date" />
            <select className="filter-dropdown">
            <option value="10">10</option>
            {/* Add more options for pagination */}
            </select>
            <input
            type="text"
            className="filter-search"
            placeholder="Search By Campaign Name..."
            />
        </div>
        <div className="table">
            <table>
            <thead>
                <tr>
                <th>Campaign Name</th>
                <th>Contact Group</th>
                <th>Repeat</th>
                <th>Repeat Rules</th>
                <th>Status</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {campaigns.length > 0 ? (
                campaigns.map((campaign, index) => (
                    <tr key={index}>
                    <td>{campaign.name}</td>
                    <td>{campaign.group}</td>
                    <td>{campaign.repeat}</td>
                    <td>{campaign.rules}</td>
                    <td>{campaign.status}</td>
                    <td>
                        <button onClick={() => handleEditCampaign(index)}>
                        Edit
                        </button>
                        <button onClick={() => handleDeleteCampaign(index)}>
                        Delete
                        </button>
                    </td>
                    </tr>
                ))
                ) : (
                <tr>
                    <td colSpan={6}>
                    <div className="no-campaigns">
                        {/* <img
                        src="calendar-icon.svg"
                        alt="No Campaigns Found"
                        /> */}
                        <p>No SMS Broadcast Scheduler</p>
                    </div>
                    </td>
                </tr>
                )}
            </tbody>
            </table>
        </div>
        <div className="pagination">
            <button className="prev-button" disabled={true}>
            «
            </button>
            <button className="total-button">Total: 0</button>
            <button className="next-button" disabled={true}>
            »
            </button>
        </div>
        </div>
    );
};

export default BroadcastScheduler;
