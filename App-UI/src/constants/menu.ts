import { equal } from "assert"
import { is } from "immutable"

export interface MenuItemTypes {
    key: string;
    label: string;
    isTitle?: boolean;
    icon?: string;
    url?: string;
    badge?: {
        variant: string;
        text: string;
    };
    parentKey?: string;
    target?: string;
    children?: MenuItemTypes[];
}


const MENU_ITEMS: MenuItemTypes[] =

[
          {
            key: 'dashboards',
            label: 'Dashboard',
            isTitle: false,
            icon: 'home',
            url: '/dashboard'
           },
           {
               key: 'profile',
               label: 'Profile',
               isTitle: false,
               icon: 'user',
               url: '/profile'
           },
           {
            key: 'leave',
            label: 'Leave',
            isTitle: false,
            icon: 'log-out',
            url: '/leave'
           },
           {
            key: 'KRA',
            label: 'KRA',
            isTitle: false,
            icon: 'target',
            url: '/kra'
           },
           {
            key: 'Company Policy',
            label: 'Company Policy',
            isTitle: false,
            icon: 'file-text',
            url: '/companypolicy'
          },          
         
       
    ]

  
export { MENU_ITEMS};
