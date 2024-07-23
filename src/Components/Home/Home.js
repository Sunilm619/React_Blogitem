import React from 'react'
import Nav from '../Nav/Nav'
import Bloglist from '../Bloglist/Bloglist'

function Home() {
    return (
        <div>
            <Nav />
            <div className='flex flex-col items-center'>
                <img className='w-1/12' src="https://assets.ccbp.in/frontend/react-js/profile-img.png" alt="profile" />
                <h1 className='my-3'>Welcome to My Profile</h1>
                <p>This is your personal profile page.</p>
            </div>
            <Bloglist />
        </div>
    )
}

export default Home