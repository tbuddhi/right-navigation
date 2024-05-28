import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import SubPanel from '../SubPanel/SubPanel';
import './RightSidebar.scss';

interface NavItem {
  id: number,
  title: string,
  mainNavItem?: string,
  subItems?: { id: number; title: string }[]
}

const subNavItems: Record<string, NavItem[]> = {
  Chats: [
    { id: 1, mainNavItem: 'Chats', title: 'Chat Item 1', subItems: [{ id: 4, title: 'SubItem 1-1' }, { id: 5, title: 'SubItem 1-2' }] },
    { id: 2, mainNavItem: 'Chats', title: 'Chat Item 2', subItems: [{ id: 6, title: 'SubItem 2-1' }, { id: 7, title: 'SubItem 2-2' }] },
  ],
  Apps: [
    { id: 3, mainNavItem: 'Apps', title: 'App Item 1', subItems: [{ id: 8, title: 'SubItem 3-1' }, { id: 9, title: 'SubItem 3-2' }] },
  ],
  History: [
    { id: 4, mainNavItem: 'History', title: 'History Item 1', subItems: [{ id: 10, title: 'SubItem 4-1' }, { id: 11, title: 'SubItem 4-2' }] },
  ],
  Notifications: []
}

const RightSidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const [currentNavItem, setCurrentNavItem] = useState<NavItem | null>(null)
  const navigate = useNavigate()

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
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  }

  const handleClose = () => {
    setCurrentNavItem(null);
    setIsExpanded(false);
  }

  return (
    <div className="sidebarContainer">
      {isExpanded && (
        <div className="toggleButton toggleCollapse" onClick={toggleExpand}>
          <i className="fas fa-bars">X</i>
        </div>
      )}
      {isExpanded && <SubPanel navItem={currentNavItem} onClose={handleClose} />}
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

          <NavLink to="/" end className="navItem" onClick={() => handleNavItemClick('Home')}>
            <i className="fas fa-home"></i>
            <div>Home</div>
          </NavLink>

          {Object.keys(subNavItems).map((key) => (
            <NavLink
              to={`/${key.toLowerCase()}`}
              key={key}
              className="navItem"
              onClick={() => handleNavItemClick(key)}
            >
              <i className={`fas fa-${key.toLowerCase()}`}>test</i>
              <div>{key}</div>
              {subNavItems[key].length > 0 && !isExpanded && (
                <div className="toggleExpand" onClick={toggleExpand}>
                  <div className="fas fa-bars">Z</div>
                </div>
              )}
            </NavLink>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default RightSidebar;
