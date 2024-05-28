import React, { useState, useEffect } from 'react';
import './SubPanel.scss';

interface NavItem {
  id: number;
  title: string;
  mainNavItem?: string;
  subItems?: NavItem[];
}

interface SubPanelProps {
  navItem: NavItem | null;
  onClose: () => void;
}

const subNavItems: NavItem[] = [
  { id: 1, mainNavItem: 'Chats', title: 'Chat Item 1', subItems: [{ id: 4, title: 'SubItem 1-1' }, { id: 5, title: 'SubItem 1-2' }] },
  { id: 2, mainNavItem: 'Chats', title: 'Chat Item 2', subItems: [{ id: 6, title: 'SubItem 2-1' }, { id: 7, title: 'SubItem 2-2' }] },
  { id: 3, mainNavItem: 'Apps', title: 'App Item 1', subItems: [{ id: 8, title: 'SubItem 3-1' }, { id: 9, title: 'SubItem 3-2' }] },
  { id: 4, mainNavItem: 'History', title: 'History Item 1', subItems: [{ id: 10, title: 'SubItem 4-1' }, { id: 11, title: 'SubItem 4-2' }] }
];

const SubPanel: React.FC<SubPanelProps> = ({ navItem, onClose }) => {
  const [currentNav, setCurrentNav] = useState<NavItem | null>(null);
  const [navLevel, setNavLevel] = useState<number>(0); // Track the navigation level

  useEffect(() => {
    setCurrentNav(navItem);
    setNavLevel(0); // Reset navigation level on navItem change
  }, [navItem]);

  const handleNavClick = (item: NavItem) => {
    if (item.subItems && item.subItems.length > 0) {
      setCurrentNav(item);
      setNavLevel(navLevel + 1); // Increment navigation level
    } else {
      onClose(); // Close the panel if there are no sub-items
    }
  };

  const handleBackClick = () => {
    setCurrentNav(navItem);
    setNavLevel(0); // Reset to first level
  };

  return (
    <div className="subPanel">
      {currentNav && navLevel > 0 ? (
        <div>
          <button onClick={handleBackClick}>Back</button>
          <ul>
            {currentNav.subItems?.map((subItem) => (
              <li key={subItem.id} onClick={() => handleNavClick(subItem)}>
                {subItem.title}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul>
          {subNavItems.filter(item => item.mainNavItem === navItem?.title).map((item) => (
            <li key={item.id} onClick={() => handleNavClick(item)}>
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SubPanel;
