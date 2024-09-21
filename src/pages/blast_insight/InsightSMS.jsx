import { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';
import './InsightSMS.css'; 

const InsightSMS = () => {
    const [chartOptions, setChartOptions] = useState({});
    const [chartSeries, setChartSeries] = useState([]);

    useEffect(() => {
        const options = {
        chart: {
            type: 'bar',
            height: 350,
        },
        plotOptions: {
            bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded',
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        xaxis: {
            categories: [
            '1 August 2024',
            '2 August 2024',
            '3 August 2024',
            '4 August 2024',
            '5 August 2024',
            '6 August 2024',
            '7 August 2024',
            '8 August 2024',
            '9 August 2024',
            '10 August 20',
            ],
        },
        yaxis: {
            title: {
            text: 'Messages',
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
            formatter: function (val) {
                return val + ' Messages';
            },
            },
        },
        };

        const series = [
        {
            name: 'Total Messages',
            data: [99, 99, 99, 99, 99, 99, 99, 99, 99, 99],
        },
        ];

        setChartOptions(options);
        setChartSeries(series);
    }, []);

    const [recentBroadcastActivities] = useState([
        // add broadcast activity data here
    ]);

    return (
        <div className="insight">
        <div className="container">
            <div className="header-insight">
            <h1>SMS Report</h1>
            <div className="date-range">
                22 August 2024 - 29 September 2024
                <span className="icon">🗓️</span>
            </div>
            <button className="search-button">Search</button>
            <button className="export-button">Export</button>
            </div>
            <div className="metrics">
            <div className="metric">
                <div className="value">99</div>
                <div className="label">Total Messages</div>
            </div>
            <div className="metric">
                <div className="value">99</div>
                <div className="label">Messages Sent</div>
            </div>
            <div className="metric">
                <div className="value">99</div>
                <div className="label">Messages Delivered</div>
            </div>
            <div className="metric">
                <div className="value">99</div>
                <div className="label">Messages Failed</div>
            </div>
            </div>
            <div className="chart-container">
            <div id="chart">
                <ApexCharts options={chartOptions} series={chartSeries} type="bar" height={350} />
            </div>
            </div>
            <div className="stats">
            <div className="stat">
                <h2>SMS</h2>
                <div className="success">
                Total Success
                <div className="value">12.345.678</div>
                <div className="label">Messages</div>
                <div className="of-total">Of Total 0</div>
                </div>
            </div>
            <div className="stat">
                <h2>Time</h2>
                <div className="chart-container">
                <div id="time-chart">
                    {/* Time chart implementation */}
                </div>
                </div>
                <div className="legend">
                <div className="item">
                    <div className="color" style={{ backgroundColor: '#21b1f7' }}></div>
                    <div className="label">0-1 Hour</div>
                    <div className="percentage">30%</div>
                </div>
                <div className="item">
                    <div className="color" style={{ backgroundColor: '#0d87ca' }}></div>
                    <div className="label">1-8 Hour</div>
                    <div className="percentage">25%</div>
                </div>
                <div className="item">
                    <div className="color" style={{ backgroundColor: '#0067b2' }}></div>
                    <div className="label">8-24 Hour</div>
                    <div className="percentage">20%</div>
                </div>
                <div className="item">
                    <div className="color" style={{ backgroundColor: '#00558a' }}></div>
                    <div className="label">&gt; 24 Hour</div>
                    <div className="percentage">15%</div>
                </div>
                <div className="item">
                    <div className="color" style={{ backgroundColor: '#00446e' }}></div>
                    <div className="label">No Replies</div>
                    <div className="percentage">10%</div>
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
        </div>
    );
};

export default InsightSMS;