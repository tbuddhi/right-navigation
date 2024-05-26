import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SubPanel from '../SubPanel/SubPanel';
import './RightSidebar.scss';

const RightSidebar: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="sidebarContainer">
            {isExpanded && (
                <div className="toggleButton toggleCollapse" onClick={toggleExpand}>
                    <i className="fas fa-bars">X</i>
                </div>
            )}
            {isExpanded && <SubPanel />}
            <aside className="sidebar">
                <div className="profileAvatar">
                    <i className="fas fa-bars">Prof</i>
                </div>
                <nav className="navItems">
                    {!isExpanded && (
                        <div className="toggleExpand" onClick={toggleExpand}>
                            <div className="fas fa-bars">Z</div>
                        </div>
                    )}

                    <NavLink to="/" className="navItem">
                        <div className="fas fa-bars">Home</div>
                    </NavLink>
                    <NavLink to="/chats" className="navItem">
                        <div className="fas fa-bars">Msg</div>
                    </NavLink>
                    <NavLink to="/apps" className="navItem" >
                        <div className="fas fa-bars">Apps</div>
                    </NavLink>
                    <NavLink to="/history" className="navItem">
                        <div className="fas fa-bars">Hstry</div>
                    </NavLink>
                    <NavLink to="/notifications" className="navItem">
                        <div className="fas fa-bars">Noty</div>
                    </NavLink>
                </nav>
            </aside>
        </div>
    );
};

export default RightSidebar;
