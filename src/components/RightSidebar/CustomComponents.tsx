interface NavItem {
    id: number;
    title: string;
    labelIcon?: string;
    mainNavItem?: string;
    subItems?: NavItem[];
  }
  
export const subNavItems: Record<string, NavItem[]> = {
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