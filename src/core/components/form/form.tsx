import { SyntheticEvent, useEffect, useState } from 'react';
import { saveUserData } from '../../mocks/mock.service';
import { FormType } from '../../models/form';
import { Personal } from './form.personal/personal';
import { Access } from './form.access/access';
import { Login } from './form.login/login';
import { Confirmation } from './confirmation/confirmation';
import './form.css';

export function Form() {
    const initialState: FormType = {
        userName: '',
        lastName: '',
        birthDate: '',
        gender: '',
        email: '',
        isChecked: false,
        userNameAccess: '',
        password: '',
        repeatPass: '',
        accountType: '',
        step1: false,
        step2: false,
        step3: false,
        step4: false,
        dataError: false,
        userLogin: '',
        passLogin: '',
    };

    const [userData, setUserData] = useState(initialState);

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        setUserData({ ...userData });
    };

    const handleUpdate = (data: FormType) => {
        setUserData({ ...userData, ...data });
    };

    //PERSISTENCIA
    useEffect(() => {
        saveUserData(userData);
    }, [userData]);

    return (
        <section>
            <form className="userDataForm" onSubmit={handleSubmit}>
                {!userData.step1 ? (
                    <Personal
                        data={userData}
                        handleUpdate={handleUpdate}
                    ></Personal>
                ) : (
                    ''
                )}
                {userData.step1 && !userData.step2 ? (
                    <Access
                        data={userData}
                        handleUpdate={handleUpdate}
                    ></Access>
                ) : (
                    ''
                )}

                {userData.step2 && !userData.step3 ? (
                    <Confirmation
                        data={userData}
                        handleUpdate={handleUpdate}
                    ></Confirmation>
                ) : (
                    ''
                )}

                {userData.step3 && !userData.step4 ? (
                    <Login data={userData} handleUpdate={handleUpdate}></Login>
                ) : (
                    ''
                )}

                {userData.step4 ? <h3>Hello {userData.userName}!</h3> : ''}
            </form>
        </section>
    );
}
