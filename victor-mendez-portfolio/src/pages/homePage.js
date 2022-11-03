import React from 'react';
import MainLayout from '../layouts/MainLayout';
import WelcomeCard from '../components/WelcomeCard';
import Message from '../components/Messages';

function HomePage () {
    return (
        <MainLayout>
            <Message/>
        </MainLayout>
    )
};

export default HomePage;
