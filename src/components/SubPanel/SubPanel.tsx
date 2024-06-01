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
  subNavItems: Record<string, NavItem[]>;
  onClose: () => void;
}

const SubPanel: React.FC<SubPanelProps> = ({ navItem, subNavItems, onClose }) => {
  const [currentNav, setCurrentNav] = useState<NavItem | null>(null);

  useEffect(() => {
    setCurrentNav(navItem);
  }, [navItem]);

  const handleNavClick = (item: NavItem) => {
    if (item.subItems && item.subItems.length > 0) {
      setCurrentNav(item);
    }
  };

  const handleBackClick = () => {
    setCurrentNav(navItem);
  };

  return (
    <div className="subPanel">
      {currentNav && currentNav !== navItem ? (
        <div>
          {navItem && (
            <button onClick={handleBackClick}>Back</button>
          )}
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
          {navItem && subNavItems[navItem.title]?.map((item) => (
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
