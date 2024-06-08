import React from 'react'
import { Outlet } from 'react-router-dom';
import RightSidebar from '../../components/RightSidebar'
import './MainLayout.scss'

const MainLayout: React.FC = () => {
    return (
        <>
            <main className='mainContainer'>
                <Outlet />
            </main>
            <RightSidebar />
        </>
    );
};

export default MainLayout