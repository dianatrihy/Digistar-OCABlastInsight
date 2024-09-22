import { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';
import './InsightSMS.css'; 
import axios from "axios"
import moment from 'moment';

const fetchBlasts = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/blasts`);
      return response.data;
    } catch (error) {
      console.error('Error fetching blasts:', error);
      throw error;
    }
  };

const InsightSMS = () => {
    const [chartOptions, setChartOptions] = useState({});
    const [chartSeries, setChartSeries] = useState([]);
    const [recentBroadcastActivities, setrecentBroadcastActivities] = useState([
        // add broadcast activity data here
    ]);

    useEffect(() => {
        const getBlasts = async () => {
            try {
              const data = await fetchBlasts();
              
              setrecentBroadcastActivities(data.data); // Assuming the response structure is { data: [...] }

              const categories = data.data.map(activity => new Date(activity.schedule_start).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }));

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
                    categories: categories,
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
            } catch (error) {
              console.error('Error fetching blasts:', error);
            }
          };
      
          getBlasts();
    }, []);

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
                        <td>{activity.broadcast_name}</td>
                        <td>{activity.channel ? activity.channel : "SMS"}</td>
                        <td>{activity.contact}</td>
                        <td>{activity.daily_max_operation}</td>
                        <td>{moment(activity.created_at).format('DD MMMM YYYY')}</td>
                        <td>{moment(activity.schedule_start).format('DD MMMM YYYY')}</td>
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