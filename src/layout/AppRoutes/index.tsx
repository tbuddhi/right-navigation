import React from 'react'
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../MainLayout';
import HomePage from '../../pages/HomePage';
import HistoryPage from '../../pages/HistoryPage';
import ChatPage from '../../pages/ChatPage';
import AppsPage from '../../pages/AppsPage';
import NotificationPage from '../../pages/Notification';
import SettingsPage from '../../pages/Settings';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/chats' element={<ChatPage />} />
        <Route path='/apps' element={<AppsPage />} />
        <Route path='/history' element={<HistoryPage />} />
        <Route path='/notifications' element={<NotificationPage />} />
        <Route path='/settings' element={<SettingsPage />} />
        {/* Add more routes here */}
      </Route>
    </Routes>
  )
}

export default AppRoutes