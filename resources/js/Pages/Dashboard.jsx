import React, { useEffect, useState } from 'react'
import Layout from './Layout/Layout'
import axios from 'axios';
import AsyncSelect from 'react-select/async';
function Dashboard(props) {
    const [inputValue, setInputValue] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);

    const handleInputChange = (newValue) => {
        setInputValue(newValue);
    };

    const handleChange = (newValue) => {
        setSelectedValue(newValue);
    };

    const fetchData = async (inputValue) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/referensi/diagnosa/${inputValue}`);
            return response.data.response.diagnosa;
        } catch (error) {
            return [];
        }
    };
    return (
        <div>
            <pre>Input Value: "{inputValue}"</pre>
                <AsyncSelect
                    cacheOptions
                    defaultOptions
                    value={selectedValue}
                    getOptionLabel={(option) => option.nama}
                    getOptionValue={(option) => option.kode}
                    loadOptions={fetchData}
                    onInputChange={handleInputChange}
                    onChange={handleChange}
                />
            <pre>Selected Value: {JSON.stringify(selectedValue || {}, null, 2)}</pre>
            <h1>{props.test1}</h1>
        </div>
    )
}
Dashboard.layout = page => <Layout children={page} title="Dashboard" />
export default Dashboard
