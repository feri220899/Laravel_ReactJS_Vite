import React from 'react'
import Layout from './Layout/Layout'

function Home() {
    return (
        <div>
            Home
        </div>
    )
}
Home.layout = page => <Layout children={page} title="Home" />
export default Home
