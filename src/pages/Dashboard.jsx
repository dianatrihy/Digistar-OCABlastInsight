// import React from "react";
import { useState, useEffect } from "react";
import ApexCharts from "apexcharts";
import "./Dashboard.css";

function Dashboard() {
    const [data, setData] = useState({
        call: {
            remainingQuota: 120,
            totalSuccess: 0,
            totalCalls: 0,
        },
        sms: {
            remainingQuota: 10,
            totalSuccess: 0,
            totalMessages: 0,
        },
        email: {
            remainingQuota: 10,
            totalSuccess: 0,
            totalMails: 0,
        },
        whatsappMarketing: {
            remainingQuota: 0,
            totalSuccess: 0,
            totalSessions: 0,
        },
        whatsappUtility: {
            remainingQuota: 0,
            totalSuccess: 0,
            totalSessions: 0,
        },
    });

    const [recentBroadcastActivities] = useState([
        // add broadcast activity data here
    ]);

    useEffect(() => {
        // simulate updating data every second
        const intervalId = setInterval(() => {
            setData((prevData) => ({
                ...prevData,
                call: {
                    ...prevData.call,
                    totalCalls: Math.floor(Math.random() * prevData.call.remainingQuota),
                    totalSuccess: Math.min(
                        Math.floor(Math.random() * prevData.call.remainingQuota),
                        prevData.call.totalCalls // Ensure totalSuccess is <= totalCalls
                    ),
                },
                sms: {
                    ...prevData.sms,
                    totalMessages: Math.floor(Math.random() * prevData.sms.remainingQuota),
                    totalSuccess: Math.min(
                        Math.floor(Math.random() * prevData.sms.remainingQuota),
                        prevData.sms.totalMessages // Ensure totalSuccess is <= totalMessages
                    ),
                },
                email: {
                    ...prevData.email,
                    totalMails: Math.floor(Math.random() * prevData.email.remainingQuota),
                    totalSuccess: Math.min(
                        Math.floor(Math.random() * prevData.email.remainingQuota),
                        prevData.email.totalMails // Ensure totalSuccess is <= totalMails
                    ),
                },
                whatsappMarketing: {
                    ...prevData.whatsappMarketing,
                    totalSessions: Math.floor(Math.random() * prevData.whatsappMarketing.remainingQuota),
                    totalSuccess: Math.min(
                        Math.floor(Math.random() * prevData.whatsappMarketing.remainingQuota),
                        prevData.whatsappMarketing.totalSessions // Ensure totalSuccess is <= totalSessions
                    ),
                },
                whatsappUtility: {
                    ...prevData.whatsappUtility,
                    totalSessions: Math.floor(Math.random() * prevData.whatsappUtility.remainingQuota),
                    totalSuccess: Math.min(
                        Math.floor(Math.random() * prevData.whatsappUtility.remainingQuota),
                        prevData.whatsappUtility.totalSessions // Ensure totalSuccess is <= totalSessions
                    ),
                },
            }));            
        }, 1000000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        // Initialize ApexCharts for success rates
        const chartOptions = {
        series: [
            {
            name: "Total Success",
            data: [
                data.call.totalSuccess / data.call.totalCalls,
                data.sms.totalSuccess / data.sms.totalMessages,
                data.email.totalSuccess / data.email.totalMails,
                data.whatsappMarketing.totalSuccess /
                data.whatsappMarketing.totalSessions,
                data.whatsappUtility.totalSuccess /
                data.whatsappUtility.totalSessions,
            ],
            },
        ],
        chart: {
            type: "bar",
            height: 350,
        },
        plotOptions: {
            bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: [
            "Call",
            "SMS",
            "Email",
            "WhatsApp - Marketing",
            "WhatsApp - Utility",
            ],
        },
        yaxis: {
            title: {
            text: "Success Rate (%)",
            },
            min: 0,
            max: 100,
        },
        };

        new ApexCharts(
        document.querySelector("#successRateChart"),
        chartOptions
        ).render();
    }, [data]);

    return (
        <div className="container">
        <h3>Good Morning, Digistar 38-1!</h3>
        <div className="row">
            <div className="col-md-12">
            <h6>Remaining Quota</h6>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3 quota-card">
            <div className="quota-title blue">Call</div>
            <div className="quota-value">{data.call.remainingQuota}</div>
            <div className="quota-unit">Seconds</div>
            </div>
            <div className="col-md-3 quota-card">
            <div className="quota-title yellow">SMS</div>
            <div className="quota-value">{data.sms.remainingQuota}</div>
            <div className="quota-unit">Messages</div>
            </div>
            <div className="col-md-3 quota-card">
            <div className="quota-title purple">Email</div>
            <div className="quota-value">{data.email.remainingQuota}</div>
            <div className="quota-unit">Mails</div>
            </div>
            <div className="col-md-3 quota-card">
            <div className="quota-title green">WhatsApp - Marketing</div>
            <div className="quota-value">
                {data.whatsappMarketing.remainingQuota}
            </div>
            <div className="quota-unit">Sessions</div>
            </div>
            <div className="col-md-3 quota-card">
            <div className="quota-title green">WhatsApp - Utility</div>
            <div className="quota-value">
                {data.whatsappUtility.remainingQuota}
            </div>
            <div className="quota-unit">Sessions</div>
            </div>
        </div>
        <div className="success-rate-container">
            <h6>Success Rate</h6>
            <div className="success-cards">
                <div className="success-card">
                    <h5>Call</h5>
                    <div className="success-percentage">{data.call.totalCalls > 0 ? `${((data.call.totalSuccess / data.call.totalCalls) * 100).toFixed(1)}%` : '0%'}</div>
                    <p>Total Success</p>
                    <div className="success-detail">
                        <span>{data.call.totalSuccess} Calls</span>
                        <span>Of Total {data.call.totalCalls}</span>
                    </div>
                </div>
                <div className="success-card">
                    <h5>SMS</h5>
                    <div className="success-percentage">{data.sms.totalMessages > 0 ? `${((data.sms.totalSuccess / data.sms.totalMessages) * 100).toFixed(1)}%` : '0%'}</div>
                    <p>Total Success</p>
                    <div className="success-detail">
                        <span>{data.sms.totalSuccess} Messages</span>
                        <span>Of Total {data.sms.totalMessages}</span>
                    </div>
                </div>
                <div className="success-card">
                    <h5>WhatsApp</h5>
                    <div className="success-percentage">{data.whatsappMarketing.totalSessions > 0 ? `${((data.whatsappMarketing.totalSuccess / data.whatsappMarketing.totalSessions) * 100).toFixed(1)}%` : '0%'}</div>
                    <p>Total Success</p>
                    <div className="success-detail">
                        <span>{data.whatsappMarketing.totalSuccess} Messages</span>
                        <span>Of Total {data.whatsappMarketing.totalSessions}</span>
                    </div>
                </div>
                <div className="success-card">
                    <h5>Email</h5>
                    <div className="success-percentage">{data.email.totalMails > 0 ? `${((data.email.totalSuccess / data.email.totalMails) * 100).toFixed(1)}%` : '0%'}</div>
                    <p>Total Success</p>
                    <div className="success-detail">
                        <span>{data.email.totalSuccess} Mail</span>
                        <span>Of Total {data.email.totalMails}</span>
                    </div>
                </div>
            </div>
        </div>
        <section className="recent-activities">
            <h6>Recent Broadcast Activities</h6>
            <table>
                <thead>
                <tr>
                    <th>Campaign Name</th>
                    <th>Channel</th>
                    <th>Contact</th>
                    <th>Total Broadcast</th>
                    <th>Created Date</th>
                    <th>Broadcast Date</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {recentBroadcastActivities.length > 0 ? (
                    recentBroadcastActivities.map((activity, index) => (
                    <tr key={index}>
                        <td>{activity.campaignName}</td>
                        <td>{activity.channel}</td>
                        <td>{activity.contact}</td>
                        <td>{activity.totalBroadcast}</td>
                        <td>{activity.createdDate}</td>
                        <td>{activity.broadcastDate}</td>
                        <td>{activity.status}</td>
                    </tr>
                    ))
                ) : (
                    <tr>
                    <td colSpan="7" className="text-center">
                        No Data
                    </td>
                    </tr>
                )}
                </tbody>
            </table>
        </section>
        </div>
    );
}

export default Dashboard;
