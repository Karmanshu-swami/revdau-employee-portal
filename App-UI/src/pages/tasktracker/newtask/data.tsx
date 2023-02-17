// Updated by Saurabh on 25/11/2022 

// images
import avatar2 from '../../../assets/images/users/avatar-0.png';
import avatar3 from '../../../assets/images/users/avatar-0.png';
import avatar4 from '../../../assets/images/users/avatar-0.png';
import avatar5 from '../../../assets/images/users/avatar-0.png';
import avatar6 from '../../../assets/images/users/avatar-0.png';
import avatar7 from '../../../assets/images/users/avatar-0.png';
import avatar8 from '../../../assets/images/users/avatar-0.png';

export interface TaskTypes {
    id: number;
    title: string;
    status: string;
    priority: string;
    userAvatar: string;
    totalComments: number;
    totalSubTasks: number;
    subTaskCompleted: number;
    dueDate: string;
}

const tasks: TaskTypes[] = [
    {
        id: 1,
        title: 'TCx Portal - Redesign',
        status: 'Pending',
        priority: 'High',
        userAvatar: avatar5,
        totalComments: 28,
        totalSubTasks: 10,
        subTaskCompleted: 1,
        dueDate: 'Jul 18, 2023',
    },
    {
        id: 2,
        title: 'TCx Portal - Redesign',
        status: 'Inprogress',
        priority: 'Low',
        userAvatar: avatar6,
        totalComments: 21,
        totalSubTasks: 7,
        subTaskCompleted: 4,
        dueDate: 'Jul 20, 2023',
    },
    {
        id: 3,
        title: 'Olio - Angular and Django',
        status: 'Review',
        priority: 'Low',
        userAvatar: avatar2,
        totalComments: 24,
        totalSubTasks: 2,
        subTaskCompleted: 1,
        dueDate: 'Nov 21, 2020',
    },
    {
        id: 4,
        title: 'Power BI - React, Webpack',
        status: 'Done',
        priority: 'High',
        userAvatar: avatar7,
        totalComments: 21,
        totalSubTasks: 5,
        subTaskCompleted: 5,
        dueDate: 'Jul 22, 2022',
    },
    {
        id: 5,
        title: 'Power BI - React, Webpack',
        status: 'Pending',
        priority: 'Low',
        userAvatar: avatar3,
        totalComments: 2,
        totalSubTasks: 5,
        subTaskCompleted: 2,
        dueDate: 'Dec 18, 2021',
    },
    {
        id: 6,
        title: 'Migration - Sevone, NodeJs, Mean',
        status: 'Pending',
        priority: 'Medium',
        userAvatar: avatar4,
        totalComments: 24,
        totalSubTasks: 8,
        subTaskCompleted: 2,
        dueDate: 'Aug 21, 2022',
    },
    {
        id: 7,
        title: 'Revdau Portal - Landing page and UI Kit',
        status: 'Review',
        priority: 'Medium',
        userAvatar: avatar7,
        totalComments: 11,
        totalSubTasks: 6,
        subTaskCompleted: 4,
        dueDate: 'Dec 31, 2022',
    },
    {
        id: 8,
        title: 'Testing - Scoping',
        status: 'Inprogress',
        priority: 'High',
        userAvatar: avatar8,
        totalComments: 10,
        totalSubTasks: 4,
        subTaskCompleted: 3,
        dueDate: 'Jul 24, 2022',
    },
];

export { tasks };
