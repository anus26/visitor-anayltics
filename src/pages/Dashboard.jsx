import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BrowserPieChart from '../Components/BrowserPieChart';

const Dashboard = () => {
  const [chatData, setChartData] = useState([]); // ✅ FIX: array

  useEffect(() => {
    const Data = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/visitor');
        console.log(res.data.visits); // Confirm it's an array
        setChartData(res.data.visits); // ✅ pass array only
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    Data();
  }, []);

  return (
    <>
    <div className='flex    items-center w-96 m-16 '>

      <BrowserPieChart visits={chatData} field="browser" />
            <BrowserPieChart visits={chatData} field="ip" />
                  <BrowserPieChart visits={chatData} field="device" /> 
    </div>
    </>
  );
};

export default Dashboard;
