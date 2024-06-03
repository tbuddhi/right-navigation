import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Box, Avatar } from '@mui/material';
import SubPanel from '../SubPanel/SubPanel';
import AvatarImage from '../../assets/person_f.png'
import './RightSidebar.scss';

interface NavItem {
  id: number;
  title: string;
  labelIcon?: string;
  mainNavItem?: string;
  subItems?: NavItem[];
}

const subNavItems: Record<string, NavItem[]> = {
  Chats: [
    {
      id: 1,
      mainNavItem: 'Chats',
      title: 'Label 1 here', labelIcon: 'icon-1', subItems: [{ id: 4, title: 'SubItem 1-1' }, { id: 5, title: 'SubItem 1-2' }]
    },
    { id: 2, mainNavItem: 'Chats', title: 'Label 2 here', labelIcon: 'icon-2', subItems: [{ id: 6, title: 'SubItem 2-1' }, { id: 7, title: 'SubItem 2-2' }] },
    { id: 3, mainNavItem: 'Chats', title: 'Label 3 here', labelIcon: 'icon-3', subItems: [{ id: 6, title: 'SubItem 2-1' }, { id: 7, title: 'SubItem 2-2' }] },
  ],
  Apps: [
    { id: 3, mainNavItem: 'Apps', title: 'App Item 1', subItems: [{ id: 8, title: 'SubItem 3-1' }, { id: 9, title: 'SubItem 3-2' }] },
  ],
  History: [
    { id: 4, mainNavItem: 'History', title: 'History Item 1', subItems: [{ id: 10, title: 'SubItem 4-1' }, { id: 11, title: 'SubItem 4-2' }] },
  ],
  Notifications: []
};

const NavIcon: React.FC = () => {
  return (
    <span className="icon"></span>
  );
};

const RightSidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [currentNavItem, setCurrentNavItem] = useState<NavItem | null>(null);
  const navigate = useNavigate();

  const handleNavItemClick = (title: string) => {
    if (title === 'Home') {
      navigate('/');
      setIsExpanded(false);
      setCurrentNavItem(null);
    } else if (subNavItems[title].length > 0) {
      setCurrentNavItem({ id: Date.now(), title });
    } else {
      setCurrentNavItem(null);
      setIsExpanded(false);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClose = () => {
    setCurrentNavItem(null);
    setIsExpanded(false);
  };

  return (
    <Box role="presentation" className="sidebarContainer">
      {isExpanded && (
        <div className="toggleButton toggleCollapse" onClick={toggleExpand}>
          <span className="collapse-ico"></span>
        </div>
      )}
      {isExpanded && <SubPanel navItem={currentNavItem} subNavItems={subNavItems} onClose={handleClose} />}
      <aside className="sidebar">
        <div className="profileAvatar">
          <Avatar className='customAvatar' alt="Profile Photo" src={AvatarImage} />
        </div>
        <nav className="navItems">

          <NavLink to="/" className="navItem home-ico" onClick={() => handleNavItemClick('Home')}>
            <NavIcon />
          </NavLink>

          {Object.keys(subNavItems).map((key) => (
            <NavLink
              key={key}
              to={`/${key.toLowerCase()}`}
              className={`navItem ${key.toLowerCase()}`}
              onClick={() => handleNavItemClick(key)}
            >
              <NavIcon />
              {subNavItems[key].length > 0 && !isExpanded && (
                <div className="toggleExpand" onClick={toggleExpand}>
                  <span className="expand-ico"></span>
                </div>
              )}
            </NavLink>
          ))}
          <hr className='divider'/>
          <div className='configNavItems'>
            <NavLink to="/settings" className="navItem settings">
              <NavIcon />
            </NavLink>
            <NavLink to="/logout" className="navItem logout">
              <NavIcon />
            </NavLink>
          </div>
        </nav>
      </aside>
    </Box>
  );
};

export default RightSidebar;
