import { useState } from 'react';
import { FormType } from '../../../models/form';
import { Pagination } from '../pagination/pagination';

export function Confirmation({
    data,
    handleUpdate,
}: {
    data: FormType;
    handleUpdate: (data: FormType) => void;
}) {
    const initialFormData: FormType = data;
    const [formData, setFormData] = useState(initialFormData);

    const handleBtnSubmit = () => {
        formData.step3 = true;
        setFormData({ ...formData });
        handleUpdate(formData);
    };

    const handleBtnPrev = () => {
        formData.step2 = false;
        setFormData({ ...formData });
        handleUpdate(formData);
    };

    return (
        <>
            <h2>Confirmation</h2>
            <h3>User Data</h3>
            <ul>
                <li>{data.userName}</li>
                <li>{data.lastName}</li>
                <li>{data.birthDate}</li>
                <li>{data.gender}</li>
                <li>{data.email}</li>
            </ul>
            <h3>Access Data</h3>
            <ul>
                <li>{data.userNameAccess}</li>
                <li>{data.password}</li>
                <li>{data.accountType}</li>
            </ul>
            <div>
                <Pagination handleBtnPrev={handleBtnPrev}></Pagination>
                <button type="submit" onClick={handleBtnSubmit}>
                    Confirm
                </button>
            </div>
        </>
    );
}
