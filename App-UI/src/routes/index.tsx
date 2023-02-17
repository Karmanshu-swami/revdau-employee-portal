import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import Certifications from '../pages/certifications/certifications';
import Leave from "../pages/leave";


// components
import PrivateRoute from './PrivateRoute';
import Root from './Root';

// lazy load all the views

// auth
const Login = React.lazy(() => import('../pages/auth/Login'));
const Logout = React.lazy(() => import('../pages/auth/Logout'));
const Confirm = React.lazy(() => import('../pages/auth/Confirm'));
const ForgetPassword = React.lazy(() => import('../pages/auth/ForgetPassword'));
const Register = React.lazy(() => import('../pages/auth/Register'));
const LockScreen = React.lazy(() => import('../pages/auth/LockScreen'));
const changePassword = React.lazy(()=>import('../pages/auth/ChangePassword'));
// landing
const Landing = React.lazy(() => import('../pages/landing/'));




// dashboard
const Dashboard = React.lazy(() => import('../pages/dashboard'));
const AnalyticsDashboard = React.lazy(() => import('../pages/dashboard/Analytics/'));


//Leave
const leave = React.lazy(() => import("../pages/leave"));
const leaveForm = React.lazy(() => import("../pages/leave/LeaveForm"));
const leavemaster = React.lazy(() => import("../pages/leave/leavemaster"));
const ApproveLeave = React.lazy(() => import("../pages/leave/ApproveLeave"));
const LeaveTable = React.lazy(() => import("../pages/leave/leaveTable"));



// Certifications
const certifications = React.lazy(() => import(`../pages/certifications/certifications`));

// Task Tracker Employee
const Assign = React.lazy(() => import('../pages/tasktracker/employeeTaskTraker/DraggableEmp'));
const empTaskList = React.lazy(() => import("../pages/tasktracker/employeeTaskTraker/empTaskList"));
const AddNewTask = React.lazy(() => import("../pages/tasktracker/employeeTaskTraker/AddNewTask"));
const editComment = React.lazy(() => import("../pages/tasktracker/employeeTaskTraker/editComment"));
const AddTask = React.lazy(() => import("../pages/tasktracker/AddTask"));

// Task Tracker Project Manager
const AssignTask = React.lazy(() => import("../pages/tasktracker/ProjectManager/AssignTask"));
const taskmaster = React.lazy(() => import('../pages/tasktracker/ProjectManager/taskmaster'));
const TaskHistoryPM = React.lazy(() => import("../pages/tasktracker/ProjectManager/taskhistoryPM"));
const Taskallocate = React.lazy(() => import('../pages/tasktracker/ProjectManager/DraggablePM'));


// Task Tracker Reporting Manager
const TaskSchedule = React.lazy(() => import("../pages/tasktracker/ReportingManager/taskschedule"));
const TaskHistoryRM = React.lazy(() => import("../pages/tasktracker/ReportingManager/taskhistoryRM"));
const Taskindex = React.lazy(() => import('../pages/tasktracker/ReportingManager/DraggableRM'));



// Master data
const masterdata = React.lazy(() => import('../pages/masterdata/masterdata'));
const employeemaster = React.lazy(() => import('../pages/masterdata/employeemaster'));
const uploaddata = React.lazy(() => import('../pages/masterdata/uploaddata'));
const addemployee = React.lazy(() => import('../pages/masterdata/addemployee'));
const editemployee = React.lazy(() => import('../pages/masterdata/editemployee'));
const previousexperience = React.lazy(() => import('../pages/masterdata/previousexperience'));
const educationcertificate = React.lazy(() => import('../pages/masterdata/educationcertificate'));
const compensationdetails = React.lazy(() => import('../pages/masterdata/compensationdetails'));
const uploaddocuments = React.lazy(() => import('../pages/masterdata/uploaddocuments'));

//User profile
const showemployeerecord = React.lazy(() => import('../pages/userprofile/showemployeerecord'));
// Kra
const reviewkra = React.lazy(() => import('../pages/kra/reviewkra'));
const editkra = React.lazy(() => import('../pages/kra/editkra'));
const viewkra = React.lazy(() => import('../pages/kra/viewkra'));
const viewallkra = React.lazy(() => import('../pages/kra/viewallkra'));
const findallkra = React.lazy(() => import('../pages/kra/findallkra'));
const managercomment = React.lazy(() => import('../pages/kra/managercomment'));
const kra = React.lazy(() => import('../pages/kra/kra'));
const kraindex = React.lazy(() => import('../pages/kra/kraindex'));

const Policy = React.lazy(() => import('../pages/Policy'));
//  const Leave = React.lazy(() => import('../pages/leave'));
//  const Kra = React.lazy(() => import('../pages/kra'));


// apps
const CalendarApp = React.lazy(() => import('../pages/apps/Calendar/'));
const Projects = React.lazy(() => import('../pages/apps/Projects/'));
const ProjectDetail = React.lazy(() => import('../pages/apps/Projects/Detail/'));
// - chat
const ChatApp = React.lazy(() => import('../pages/apps/Chat/'));
// - email
const Inbox = React.lazy(() => import('../pages/apps/Email/Inbox'));
const EmailDetail = React.lazy(() => import('../pages/apps/Email/Detail'));
const EmailCompose = React.lazy(() => import('../pages/apps/Email/Compose'));
// - tasks
const TaskList = React.lazy(() => import('../pages/apps/Tasks/List/'));
const Kanban = React.lazy(() => import('../pages/apps/Tasks/Board/'));
// - file
const FileManager = React.lazy(() => import('../pages/apps/FileManager'));

// extra pages
const Error404 = React.lazy(() => import('../pages/error/Error404'));
const Error500 = React.lazy(() => import('../pages/error/Error500'));
// -other
const Starter = React.lazy(() => import('../pages/other/Starter'));
const Profile = React.lazy(() => import('../pages/other/Profile'));
const Activity = React.lazy(() => import('../pages/other/Activity'));
const Invoice = React.lazy(() => import('../pages/other/Invoice'));
const Maintenance = React.lazy(() => import('../pages/other/Maintenance'));
const Pricing = React.lazy(() => import('../pages/other/Pricing'));

// uikit
const UIElements = React.lazy(() => import('../pages/uikit'));

// widgets
const Widgets = React.lazy(() => import('../pages/widgets/'));

// icons
const Unicons = React.lazy(() => import('../pages/icons/Unicons'));
const FeatherIcons = React.lazy(() => import('../pages/icons/Feather/'));
const BootstrapIcon = React.lazy(() => import('../pages/icons/Bootstrap/'));

// forms
const BasicForms = React.lazy(() => import('../pages/forms/Basic'));
const FormAdvanced = React.lazy(() => import('../pages/forms/Advanced'));
const FormValidation = React.lazy(() => import('../pages/forms/Validation'));
const FormWizard = React.lazy(() => import('../pages/forms/Wizard'));
const FileUpload = React.lazy(() => import('../pages/forms/FileUpload'));
const Editors = React.lazy(() => import('../pages/forms/Editors'));

// charts
const Charts = React.lazy(() => import('../pages/charts/'));

// tables
const BasicTables = React.lazy(() => import('../pages/tables/Basic'));
const AdvancedTables = React.lazy(() => import('../pages/tables/Advanced'));

// maps
const GoogleMaps = React.lazy(() => import('../pages/maps/GoogleMaps'));
const VectorMaps = React.lazy(() => import('../pages/maps/VectorMaps'));

export interface RoutesProps {
    path: RouteProps['path'];
    name?: string;
    component?: RouteProps['component'];
    route?: any;
    exact?: RouteProps['exact'];
    icon?: string;
    header?: string;
    role?: string[];
    children?: RoutesProps[];
}

// root routes
const rootRoute: RoutesProps = {
    path: '/',
    exact: true,
    component: () => <Root />,
    route: Route,
};

// dashboards
const dashboardRoutes: RoutesProps = {
    path: '/dashboard',
    name: 'Dashboards',
    icon: 'airplay',
    header: 'Navigation',
    component: Dashboard,
    route: PrivateRoute
};

const profileRoutes: RoutesProps = {
    path: '/profile',
    name: 'Show Employee Record',
    route: PrivateRoute,
    component: Profile,
    
};

const PasswordRoute: RoutesProps = {
    path: '/changePassword',
    name: 'change password',
    route: PrivateRoute,
    component: changePassword,
    
};


//Leave
const leaveRoutes: RoutesProps = {
    path: "/leave",
    name: "Leave",
    route: PrivateRoute,
    children: [
      {
        path: "/LeaveForm",
        name: "Leave Form",
        component: leaveForm,
        route: PrivateRoute,
      },
      {
        path: "/LeaveTable",
        name: "Leave Table",
        component: LeaveTable,
        route: PrivateRoute,
      },
      {
        path: "/leave",
        name: "Leave",
        component: leave,
        route: PrivateRoute,
      },
    ],
  };
  const leavemasterRoutes: RoutesProps = {
    path: '/leavemaster',
    name: 'LeaveMaster',
    route: PrivateRoute,
    component: leavemaster,
    
};

const ApproveLeaveRoutes: RoutesProps = {
    path: '/approveleave',
    name: 'Approve Leave',
    route: PrivateRoute,
    component: ApproveLeave,
    
};
// KRA routes
const kraindexRoutes: RoutesProps = {
    path: '/kraindex',
    name: 'KraIndex',
    route: PrivateRoute,
    component: kra,
    
};

const kraRoutes: RoutesProps = {
    path: '/kra',
    name: 'KRA',
    route: PrivateRoute,
    component: kraindex,
    
};

const editkraRoutes: RoutesProps = {
    path: '/editkra',
    name: 'Edit Kra',
    route: PrivateRoute,
    component: editkra,
    
};
const findallkraRoutes: RoutesProps = {
    path: '/findallkra',
    name: 'Find all Kra',
    route: PrivateRoute,
    role: ['Admin','HR',],
    component: findallkra,
    
};

const viewkraRoutes: RoutesProps = {
    path: '/viewkra',
    name: 'View Kra',
    route: PrivateRoute,
    component: viewkra,
    
};

const viewallkraRoutes: RoutesProps = {
    path: '/viewallkra',
    name: 'View all Kra',
    route: PrivateRoute,
    component: viewallkra,
    
};
const ReviewKRARoutes: RoutesProps = {
    path: '/reviewkra',
    name: 'Review KRA',
    route: PrivateRoute,
    role: ['Manager'],
    component: reviewkra,
    
};
const ManagerCommentRoutes: RoutesProps = {
    path: '/managercomment',
    name: 'Manager Comment',
    route: PrivateRoute,
    role: ['Manager'],
    component: managercomment,
    
};

// Certifications
const certificationsRoutes: RoutesProps = {
    path: '/certifications',
    name: 'Certifications',
    route: PrivateRoute,
    component: certifications,
    
};

// Task Tracker

const newtaskRoutes: RoutesProps = {
    path: '/Assign',
    name: 'Assign',
    route: PrivateRoute,
    role: ['Project Manager','Manager'],
    component: Assign,
};

const DraggableRoutes: RoutesProps = {
    path: '/Taskindex',
    name: 'Task index',
    route: PrivateRoute,
    role: ['Manager'],
    component: Taskindex,
};

const TaskallocateRoutes: RoutesProps = {
    path: '/Taskallocate',
    name: 'Task allocate',
    route: PrivateRoute,
    role: ['Project Manager'],
    component: Taskallocate,
};

const empTaskListRoutes: RoutesProps = {
    path: "/empTaskList",
    name: "Emp TaskList",
    route: PrivateRoute,
    component: empTaskList,
  };

  const AddNewTaskRoutes: RoutesProps = {
    path: "/addNewTask",
    name: "Emp TaskList",
    route: PrivateRoute,
    component: AddNewTask,
  };
  const editCommentRoutes: RoutesProps = {
    path: "/editComment/:task_id",
    name: "Emp TaskList",
    route: PrivateRoute,
    component: editComment,
  };

const taskmasterRoutes: RoutesProps = {
    path: '/taskmaster',
    name: 'Task Master',
    route: PrivateRoute,
    role: ['Project Manager'],
    component: taskmaster,
    
};
const AddTaskRoutes: RoutesProps = {
    path: '/addtask',
    name: 'Add Task',
    route: PrivateRoute,
    role: ['Project Manager'],
    component: AddTask,
    
};
const AssignTaskRoutes: RoutesProps = {
    path: '/assigntask',
    name: 'Assign Task',
    route: PrivateRoute,
    role: ['Project Manager'],
    component: AssignTask,
    
};

const TaskScheduleRoutes: RoutesProps = {
    path: '/taskschedule',
    name: 'Task Schedule',
    route: PrivateRoute,
    role: ['Manager'],
    component: TaskSchedule,
    
};
const TaskHistoryPMRoutes: RoutesProps = {
    path: '/taskhistorypm',
    name: 'Task History',
    route: PrivateRoute,
    role: ['Manager'],
    component: TaskHistoryPM,
    
};
const TaskHistoryRMRoutes: RoutesProps = {
    path: '/taskhistoryrm',
    name: 'Task History',
    route: PrivateRoute,
    role: ['Manager'],
    component: TaskHistoryRM,
    
};


// Master data routes

const masterdataRoutes: RoutesProps = {
    path: '/masterdata',
    name: 'Master Data',
    route: PrivateRoute,
    role: ['Admin','HR',],
    component: masterdata,
    
};
const employeemasterRoutes: RoutesProps = {
    path: '/employeeMaster',
    name: 'Employee Master',
    route: PrivateRoute,
    role: ['Admin','HR'],
    icon: 'calendar',
    component: employeemaster,
    header: 'Apps',

};
const uploaddataRoutes: RoutesProps = {
    path: '/uploaddata',
    name: 'Upload Data',
    route: PrivateRoute,
    role: ['Admin','HR'],
    component: uploaddata,
    
};
const addemployeeRoutes: RoutesProps = {
    path: '/addemployee',
    name: 'Add Employee',
    route: PrivateRoute,
    role: ['Admin','HR'],
    component: addemployee,
    
};
const editemployeeRoutes: RoutesProps = {
    path: '/editemployee',
    name: 'Edit Employee',
    route: PrivateRoute,
    role: ['Admin','HR'],
    component: editemployee,
    
};
const showemployeerecordRoutes: RoutesProps = {
    path: '/showemployee',
    name: 'Show Employee Record',
    route: PrivateRoute,
    component: showemployeerecord,
    
};

const CompanyPolicy: RoutesProps = {
    path: '/companyPolicy',
    name: 'Company Policy',
    route: PrivateRoute,
    component: Policy,
    
};
const previousexperienceRoutes: RoutesProps = {
    path: '/previousexperience',
    name: 'Previous Experience',
    route: PrivateRoute,
    role: ['Admin','HR'],
    component: previousexperience,
    
};
const educationcertificateRoutes: RoutesProps = {
    path: '/educationcertificate',
    name: 'Education Certificate',
    route: PrivateRoute,
    role: ['Admin','HR'],
    component: educationcertificate,
    
};
const compensationdetailsRoutes: RoutesProps = {
    path: '/compensationdetails',
    name: 'Compensation Details',
    route: PrivateRoute,
    role: ['Admin','HR'],
    component: compensationdetails,
    
};
const uploaddocumentsRoutes: RoutesProps = {
    path: '/uploaddocuments',
    name: 'Upload Documents',
    route: PrivateRoute,
    role: ['Admin','HR'],
    component: uploaddocuments,
    
};

//     
//

const calendarAppRoutes: RoutesProps = {
    path: '/apps/calendar',
    name: 'Calendar',
    route: PrivateRoute,
    role: ['Admin'],
    icon: 'calendar',
    component: CalendarApp,
    header: 'Apps',
};

const chatAppRoutes: RoutesProps = {
    path: '/apps/chat',
    name: 'Chat',
    route: PrivateRoute,
    role: ['Admin'],
    icon: 'message-square',
    component: ChatApp,
};

const emailAppRoutes: RoutesProps = {
    path: '/apps/email',
    name: 'Email',
    route: PrivateRoute,
    role: ['Admin'],
    icon: 'mail',
    children: [
        {
            path: '/apps/email/inbox',
            name: 'Inbox',
            component: Inbox,
            route: PrivateRoute,
        },
        {
            path: '/apps/email/details',
            name: 'Email Details',
            component: EmailDetail,
            route: PrivateRoute,
        },
        {
            path: '/apps/email/compose',
            name: 'Compose Email',
            component: EmailCompose,
            route: PrivateRoute,
        },
    ],
};

const projectAppRoutes: RoutesProps = {
    path: '/apps/projects',
    name: 'Projects',
    route: PrivateRoute,
    role: ['Admin'],
    icon: 'uil-briefcase',

    children: [
        {
            path: '/apps/projects/list',
            name: 'List',
            component: Projects,
            route: PrivateRoute,
        },
        {
            path: '/apps/projects/details',
            name: 'Detail',
            component: ProjectDetail,
            route: PrivateRoute,
        },
    ],
};

const taskAppRoutes: RoutesProps = {
    path: '/apps/tasks',
    name: 'Tasks',
    route: PrivateRoute,
    role: ['Admin'],
    icon: 'clipboard',
    children: [
        {
            path: '/apps/tasks/list',
            name: 'Task List',
            component: TaskList,
            route: PrivateRoute,
        },
        {
            path: '/apps/tasks/kanban',
            name: 'Kanban',
            component: Kanban,
            route: PrivateRoute,
        },
    ],
};

const fileAppRoutes: RoutesProps = {
    path: '/apps/file-manager',
    name: 'File Manager',
    route: PrivateRoute,
    role: ['Admin'],
    icon: 'folder-plus',
    component: FileManager,
};

const appRoutes = [calendarAppRoutes, chatAppRoutes, emailAppRoutes, projectAppRoutes, taskAppRoutes, fileAppRoutes];

// pages
const extrapagesRoutes: RoutesProps = {
    path: '/pages',
    name: 'Pages',
    icon: 'package',
    header: 'Custom',
    children: [
        {
            path: '/pages/starter',
            name: 'Starter',
            component: Starter,
            route: PrivateRoute,
        },
        {
            path: '/pages/profile',
            name: 'Profile',
            component: Profile,
            route: PrivateRoute,
        },
        {
            path: '/pages/activity',
            name: 'Activity',
            component: Activity,
            route: PrivateRoute,
        },
        {
            path: '/pages/invoice',
            name: 'Invoice',
            component: Invoice,
            route: PrivateRoute,
        },
        {
            path: '/pages/pricing',
            name: 'Pricing',
            component: Pricing,
            route: PrivateRoute,
        },
    ],
};

// ui
const uiRoutes: RoutesProps = {
    path: '/components',
    name: 'Components',
    icon: 'package',
    header: 'UI Elements',
    children: [
        {
            path: '/components/ui-elements',
            name: 'UIElements',
            component: UIElements,
            route: PrivateRoute,
        },
        {
            path: '/components/widgets',
            name: 'Widgets',
            component: Widgets,
            route: PrivateRoute,
        },
        {
            path: '/icons',
            name: 'Icons',
            children: [
                {
                    path: '/icons/unicons',
                    name: 'Unicons',
                    component: Unicons,
                    route: PrivateRoute,
                },
                {
                    path: '/icons/feather',
                    name: 'Feather',
                    component: FeatherIcons,
                    route: PrivateRoute,
                },
                {
                    path: '/icons/bootstrap',
                    name: 'Bootstrap Icon',
                    component: BootstrapIcon,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/forms',
            name: 'Forms',
            children: [
                {
                    path: '/forms/basic',
                    name: 'Basic Elements',
                    component: BasicForms,
                    route: PrivateRoute,
                },
                {
                    path: '/forms/advanced',
                    name: 'Form Advanced',
                    component: FormAdvanced,
                    route: PrivateRoute,
                },
                {
                    path: '/forms/validation',
                    name: 'Form Validation',
                    component: FormValidation,
                    route: PrivateRoute,
                },
                {
                    path: '/forms/wizard',
                    name: 'Form Wizard',
                    component: FormWizard,
                    route: PrivateRoute,
                },
                {
                    path: '/forms/upload',
                    name: 'File Upload',
                    component: FileUpload,
                    route: PrivateRoute,
                },
                {
                    path: '/forms/editors',
                    name: 'Editors',
                    component: Editors,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/components/charts',
            name: 'Charts',
            component: Charts,
            route: PrivateRoute,
        },
        {
            path: '/tables',
            name: 'Tables',
            children: [
                {
                    path: '/tables/basic',
                    name: 'Basic',
                    component: BasicTables,
                    route: PrivateRoute,
                },
                {
                    path: '/tables/advanced',
                    name: 'Advanced',
                    component: AdvancedTables,
                    route: PrivateRoute,
                },
            ],
        },
        {
            path: '/maps',
            name: 'Maps',
            children: [
                {
                    path: '/maps/googlemaps',
                    name: 'Google Maps',
                    component: GoogleMaps,
                    route: PrivateRoute,
                },
                {
                    path: '/maps/vectorMaps',
                    name: 'Google Maps',
                    component: VectorMaps,
                    route: PrivateRoute,
                },
            ],
        },
    ],
};

// auth
const authRoutes: RoutesProps[] = [
    {
        path: '/auth/login',
        name: 'Login',
        component: Login,
        route: Route,
    },
    {
        path: '/auth/register',
        name: 'Register',
        component: Register,
        route: Route,
    },
    {
        path: '/auth/confirm',
        name: 'Confirm',
        component: Confirm,
        route: Route,
    },
    {
        path: '/auth/forget-password',
        name: 'Forget Password',
        component: ForgetPassword,
        route: Route,
    },
    {
        path: '/auth/lock-screen',
        name: 'Lock Screen',
        component: LockScreen,
        route: Route,
    },
    {
        path: '/auth/logout',
        name: 'Logout',
        component: Logout,
        route: Route,
    },
];

// public routes
const otherPublicRoutes: RoutesProps[] = [
    {
        path: '/landing',
        name: 'landing',
        component: Landing,
        route: Route,
    },
    {
        path: '/maintenance',
        name: 'Maintenance',
        component: Maintenance,
        route: Route,
    },
    {
        path: '/error-404',
        name: 'Error - 404',
        component: Error404,
        route: Route,
    },
    {
        path: '/error-500',
        name: 'Error - 500',
        component: Error500,
        route: Route,
    },
];

// flatten the list of all nested routes
const flattenRoutes = (routes: RoutesProps[]) => {
    let flatRoutes: RoutesProps[] = [];

    routes = routes || [];
    routes.forEach((item: RoutesProps) => {
        flatRoutes.push(item);

        if (typeof item.children !== 'undefined') {
            flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
        }
    });
    return flatRoutes;
};

// All routes
const authProtectedRoutes = [rootRoute, PasswordRoute ,dashboardRoutes, CompanyPolicy , profileRoutes, kraindexRoutes, kraRoutes, editkraRoutes, viewallkraRoutes,viewkraRoutes, findallkraRoutes, leaveRoutes, leavemasterRoutes, ApproveLeaveRoutes, masterdataRoutes, employeemasterRoutes, uploaddataRoutes, showemployeerecordRoutes,
    certificationsRoutes, empTaskListRoutes, AddNewTaskRoutes, AssignTaskRoutes, TaskScheduleRoutes, TaskHistoryPMRoutes, TaskHistoryRMRoutes, editCommentRoutes, AddTaskRoutes, DraggableRoutes,TaskallocateRoutes,newtaskRoutes, taskmasterRoutes,ManagerCommentRoutes, addemployeeRoutes, editemployeeRoutes, previousexperienceRoutes, educationcertificateRoutes, compensationdetailsRoutes,ReviewKRARoutes, uploaddocumentsRoutes, ...appRoutes, extrapagesRoutes, uiRoutes];
const publicRoutes = [...authRoutes, ...otherPublicRoutes];

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes]);
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes]);
export { publicRoutes, authProtectedRoutes,  authProtectedFlattenRoutes, publicProtectedFlattenRoutes };
