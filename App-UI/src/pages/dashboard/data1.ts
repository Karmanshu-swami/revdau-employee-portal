// images
import avatar1 from '../../assets/images/users/avatar-7.jpg';
import avatar2 from '../../assets/images/users/avatar-9.jpg';
import avatar3 from '../../assets/images/users/avatar-4.jpg';
import avatar4 from '../../assets/images/users/avatar-1.jpg';
import avatar0 from '../../assets/images/users/avatar-0.png';
import avatar5 from '../../assets/images/users/avatar-8.jpg';
import profilePic2 from '../../assets/images/users/avatar-5.jpg';

// types
import { MembersTypes } from '../../components/MembersList';
import { TaskItemTypes } from '../../components/Tasks';
import { MessageItemTypes } from '../../components/ChatList';

// export interface OrdersItemTypes {
//     id: number;
//     product: string;
//     customer: string;
//     price: string;
//     status: string;
// }

// const orderDetails: OrdersItemTypes[] = [
//     {
//         id: 98754,
//         product: 'ASOS Ridley High',
//         customer: 'Otto B',
//         price: '$79.49',
//         status: 'Pending',
//     },
//     {
//         id: 98753,
//         product: 'Marco Lightweight Shirt',
//         customer: 'Mark P',
//         price: '$125.49',
//         status: 'Delivered',
//     },
//     {
//         id: 98752,
//         product: 'Half Sleeve Shirt',
//         customer: 'Dave B',
//         price: '$35.49',
//         status: 'Declined',
    // },
    // {
    //     id: 98751,
    //     product: 'Lightweight Jacket',
    //     customer: 'Shreyu N',
    //     price: '$49.49',
    //     status: 'Delivered',
    // },
    // {
    //     id: 98750,
    //     product: 'Marco Shoes',
    //     customer: 'Rik N',
    //     price: '$69.49',
    //     status: 'Declined',
    // },
// ];

const topPerformers: MembersTypes[] = [
    {
        id: 1,
        name: 'Bhuvanesh Singh Rajput',
        avatar: avatar0,
        designation: 'Director',
    },
    {
        id: 2,
        name: 'Dharamveer Singh',
        avatar: avatar0,
        designation: 'Bussiness Operation Manager',
    },
    // {
    //     id: 3,
    //     name: 'Nik G',
    //     avatar: avatar3,
    //     designation: 'Inventory Manager',
    // },
    // {
    //     id: 4,
    //     name: 'Hardik G',
    //     avatar: avatar4,
    //     designation: 'Sales Person',
    // },
    // {
    //     id: 5,
    //     name: 'GB Patel G',
    //     avatar: avatar5,
    //     designation: 'Sales Person',
    // },
];

const tasks: TaskItemTypes[] = [
    {
        id: 1,
        title: 'Company Monthly Call',
        dueDate: '30 Nov, 2022',
    },
    {
        id: 2,
        title: 'Team Presentation',
        dueDate: '29 Nov, 2022',
    },
    // {
    //     id: 3,
    //     title: 'Write a release note for Shreyu',
    //     dueDate: '22 Aug, 2019',
    // },
    // {
    //     id: 4,
    //     title: 'Invite Greeva to a project shreyu admin',
    //     dueDate: '21 Aug, 2019',
    // },
    // {
    //     id: 5,
    //     title: 'Enable analytics tracking for main website',
    //     dueDate: '20 Aug, 2019',
    // },
    // {
    //     id: 6,
    //     title: 'Invite user to a project',
    //     dueDate: '18 Aug, 2019',
    // },
    // {
    //     id: 7,
    //     title: 'Write a release note',
    //     dueDate: '18 Aug, 2019',
    // },
];
const chatMessages: MessageItemTypes[] = [
    {
        id: 1,
        userPic: avatar0,
        userName: 'Geneva',
        text: 'Hello!',
        postedOn: '10:00',
    },
    {
        id: 2,
        userPic: avatar0,
        userName: 'Dominic',
        text: 'Hi, How are you? What about our next meeting?',
        postedOn: '10:01',
    },
    // {
    //     id: 3,
    //     userPic: profilePic2,
    //     userName: 'Geneva',
    //     text: 'Yeah everything is fine',
    //     postedOn: '10:02',
    // },
    // {
    //     id: 4,
    //     userPic: avatar4,
    //     userName: 'Dominic',
    //     text: "Wow that's great!",
    //     postedOn: '10:03',
    // },
    // {
    //     id: 5,
    //     userPic: profilePic2,
    //     userName: 'Geneva',
    //     text: 'Cool!',
    //     postedOn: '10:03',
    // },
];

export { 
    // orderDetails,
     topPerformers, tasks, chatMessages };
