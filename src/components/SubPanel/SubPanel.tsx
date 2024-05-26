import React, { useState } from 'react';
import './SubPanel.scss';

interface NavItem {
  id: number;
  title: string;
  subItems?: NavItem[];
}

const navItems: NavItem[] = [
  { id: 1, title: 'Item 1', subItems: [{ id: 4, title: 'SubItem 1-1' }, { id: 5, title: 'SubItem 1-2' }] },
  { id: 2, title: 'Item 2', subItems: [{ id: 6, title: 'SubItem 2-1' }, { id: 7, title: 'SubItem 2-2' }] },
  { id: 3, title: 'Item 3', subItems: [{ id: 8, title: 'SubItem 3-1' }, { id: 9, title: 'SubItem 3-2' }] }
];

const SubPanel: React.FC = () => {
  const [currentNav, setCurrentNav] = useState<NavItem | null>(null);

  const handleNavClick = (item: NavItem) => {
    setCurrentNav(item);
  };

  const handleBackClick = () => {
    setCurrentNav(null);
  };

  return (
    <div className="subPanel">
      {currentNav ? (
        <div>
          <button onClick={handleBackClick}>Back</button>
          <ul>
            {currentNav.subItems?.map((subItem) => (
              <li key={subItem.id}>{subItem.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        <ul>
          {navItems.map((item) => (
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
