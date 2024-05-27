import React from 'react';
import './SubPanel.scss';

interface SubPanelProps {
  navItem: {
    id: number;
    title: string;
    subItems?: { id: number; title: string }[];
  } | null;
  onClose: () => void;
}

const SubPanel: React.FC<SubPanelProps> = ({ navItem, onClose }) => {
  const handleBackClick = () => {
    onClose();
  };

  return (
    <div className="subPanel">
      {navItem ? (
        <div>
          <button onClick={handleBackClick}>Back</button>
          <ul>
            {navItem.subItems?.map((subItem) => (
              <li key={subItem.id}>{subItem.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        <ul>
          <li>No sub items</li>
        </ul>
      )}
    </div>
  );
};

export default SubPanel;
