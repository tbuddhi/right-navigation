import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer, useMediaQuery, useTheme } from '@mui/material';
import { subNavItems, SidebarContainer } from './CustomComponents';
import SubPanel from '../SubPanel';
import FixedBar from './FixedBar';
import './RightSidebar.scss';

interface NavItem {
  id: number;
  title: string;
  labelIcon?: string;
  mainNavItem?: string;
  subItems?: NavItem[];
}

const RightSidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [currentNavItem, setCurrentNavItem] = useState<NavItem | null>(null);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNavItemClick = (title: string) => {
    if (title === 'Home') {
      navigate('/');
      setIsExpanded(false);
      setCurrentNavItem(null);
    } else if (subNavItems[title].length > 0) {
      setCurrentNavItem({ id: Date.now(), title });
      setIsExpanded(true);
    } else {
      setCurrentNavItem(null);
      setIsExpanded(false);
    }
  };

  const handleClose = () => {
    setCurrentNavItem(null);
    setIsExpanded(false);
  };

  const handleExpand = (value: boolean) => {
    setIsExpanded(value);
  };

  return (
    <SidebarContainer role="presentation" ref={containerRef}>
      {/* Fixed right panel */}
      <FixedBar isExpanded={isExpanded} handleExpand={handleExpand} handleNavItemClick={handleNavItemClick} isMobile={isMobile}/>

      {/* SubPanel Drawer */}
      <Drawer
        variant="temporary"
        open={isExpanded}
        anchor="right"
        onClose={isMobile ? handleClose : undefined}
        ModalProps={{
          container: containerRef.current,
          style: { position: 'absolute', pointerEvents: isMobile ? 'auto' : 'none' },
          ...(isMobile ? {} : { hideBackdrop: true }),
        }}
        sx={{
          '& .MuiDrawer-paper': {
            top: '0',
            right: '65px',
            height: '100%',
            zIndex: 1300,
            pointerEvents: 'auto',
            background: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        <SubPanel navItem={currentNavItem} subNavItems={subNavItems} onClose={handleClose} isMobile={isMobile}/>
      </Drawer>
    </SidebarContainer>
  );
};

export default RightSidebar;
