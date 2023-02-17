// images
import userAvatar from '../../../assets/images/users/avatar-0.png';

export interface UserInfoTypes {
    userName?: string;
    avatar?: string;
    designation?: string;
    location?: string;
    profileProgress: number;
    about?: string;
    email?: string;
    phone?: string;
    address?: string;
    skills?: string[];
}

const userInfo: UserInfoTypes = {
    userName: 'Ankit Kumar',
    designation: 'Software Engineer',
    location: 'Pune, Maharashtra',
    avatar: userAvatar,
    profileProgress: 80,
    about: "Code Geek",
    email: ' ankit.kumar@revdau.com',
    phone: ' 7874571265',
    address: ' Vivekanand chowk , Pune',
    skills: ['Nodejs', 'UX', 'Sketch', 'Backend', 'Frontend'],
};

export { userInfo };
