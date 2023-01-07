import { FormType } from '../models/form';

export const saveUserData = (userData: FormType) => {
    localStorage.setItem('UserData', JSON.stringify(userData));
};
