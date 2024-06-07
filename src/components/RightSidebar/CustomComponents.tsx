import React from 'react';
import { Box, styled, List } from '@mui/material';

interface NavItem {
  id: number;
  title: string;
  labelIcon?: string;
  mainNavItem?: string;
  subItems?: NavItem[];
}

export const subNavItems: Record<string, NavItem[]> = {
  Chats: [
    { id: 1, mainNavItem: 'Chats', title: 'Label 1 here', labelIcon: 'icon-1', subItems: [{ id: 21, title: 'SubItem 1-1' }, { id: 25, title: 'SubItem 1-2' }] },
    { id: 2, mainNavItem: 'Chats', title: 'Label 2 here', labelIcon: 'icon-2', subItems: [{ id: 26, title: 'SubItem 2-1' }, { id: 72, title: 'SubItem 2-2' }] },
    { id: 3, mainNavItem: 'Chats', title: 'Label 3 here', labelIcon: 'icon-3', subItems: [{ id: 62, title: 'SubItem 2-1' }, { id: 27, title: 'SubItem 2-2' }] },
  ],
  Apps: [
    { id: 11, mainNavItem: 'Apps', title: 'App Item 1', subItems: [{ id: 83, title: 'App SubItem 1' }, { id: 29, title: 'App SubItem 2' }] },
    { id: 12, mainNavItem: 'Apps', title: 'App Item 1', subItems: [{ id: 28, title: 'App SubItem 1' }, { id: 93, title: 'App SubItem 2' }] },
  ],
  History: [
    { id: 21, mainNavItem: 'History', title: 'History Item 1', subItems: [{ id: 10, title: 'History SubItem 1' }, { id: 11, title: 'History SubItem 2' }] },
  ],
  Notifications: []
};

export const NavIcon: React.FC = () => {
  return <span className="icon"></span>;
};

export const NavItems = styled(List)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  alignItems: 'center',
  width: '100%',
  paddingTop: 6,
  transition: '0.5s all',
}));

export const SidebarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  position: 'fixed',
  right: 0,
  top: 0,
  height: '100%',
  zIndex: 1300,
  transition: '0.5s all',
}));