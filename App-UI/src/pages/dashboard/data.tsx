// images
export interface EventTypes {
    id: number;
    title: string;
    time: string;
}

export interface ActivityTypes {
    id: number;
    avatar?: string;
    userInitial?: string;
    variant?: string;
    activityTitle: string;
    time: string;
}
const calendarEvents: EventTypes[] = [
    {
        id: 1,
        title: 'UX Planning Meeting',
        time: '7:30 AM - 10:00 AM',
    },
    {
        id: 2,
        title: 'Hyper v3 Scope Review',
        time: '10:30 AM - 11:45 AM',
    },
    {
        id: 3,
        title: 'Ubold v4 Brainstorming',
        time: '12:15 PM - 02:00 PM',
    },
    {
        id: 4,
        title: 'Shreyu React Planning',
        time: '5:30 PM - 06:15 PM',
    },
];

const activities: ActivityTypes[] = [
    {
        id: 2,
        userInitial: 'P',
        variant: 'danger',
        activityTitle: `<a href="javascript:void(0)" class="fw-bold">Pravin</a> has commented on project <span class="fw-bold text-primary">Olio</span>`,
        time: '12 Min Ago',
    },
    {
        id: 2,
        userInitial: 'S',
        variant: 'warning',
        activityTitle: `<a href="javascript:void(0)" class="fw-bold">Saurabh</a> has commented on portal <span class="fw-bold text-warning">TCx</span>`,
        time: '16 Hrs Ago',
    },
    
    {
        id: 4,
        userInitial: 'B',
        variant: 'info',
        activityTitle: `<a href="javascript:void(0)" class="fw-bold">Bhuvanesh </a> has reacted with <i class='uil uil-heart-sign text-danger fs-13'></i> on comment from <span class="fw-bold text-success">Migration</span> on project <span class="fw-bold text-danger">Sevone</span>`,
        time: 'Just Now ',
    },
    {
        id: 2,
        userInitial: 'P',
        variant: 'primary',
        activityTitle: `<a href="javascript:void(0)" class="fw-bold">Pallavi</a> has commented on project <span class="fw-bold text-warning">Portal</span>`,
        time: '12 Min Ago',
    },
    {
        id: 2,
        userInitial: 'R',
        variant: 'dark',
        activityTitle: `<a href="javascript:void(0)" class="fw-bold">Rohini</a> has commented on project <span class="fw-bold text-dark">Nodejs</span>`,
        time: '12 Min Ago',
    },
   
];

export { calendarEvents, activities };
