import React, { useEffect } from 'react'
import Layout from './Layout/Layout'
import axios from 'axios';
function Dashboard(props) {
    useEffect(() => {
        const fetchData = async () => {
          try {
            // Use the correct variable name 'response' instead of 'res'
            const response = await axios.get('http://localhost:3000/test/test');
            console.log(JSON.parse(response.data.response))
          } catch (error) {
            console.log(error)
          }
        };

        fetchData();
      }, []);
    return (
        <div>
        </div>
    )
}
Dashboard.layout = page => <Layout children={page} title="Dashboard" />
export default Dashboard
