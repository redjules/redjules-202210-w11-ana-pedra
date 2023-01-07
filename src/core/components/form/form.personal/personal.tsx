import { SyntheticEvent, useState } from 'react';
import { FormType } from '../../../models/form';

export function Personal({
    data,
    handleUpdate,
}: {
    data: FormType;
    handleUpdate: (data: FormType) => void;
}) {
    const initialFormData: FormType = data;

    const [formData, setFormData] = useState(initialFormData);

    const handleInput = (event: SyntheticEvent) => {
        const element = event.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };

    const handleChange = () => {
        formData.isChecked = !formData.isChecked;
        setFormData({ ...formData });
        handleUpdate(formData); // Handle data with the function passed as a prop
    };

    const handleGenderChange = (event: SyntheticEvent) => {
        const element = event.target as HTMLFormElement;
        formData.gender = element.id;
        setFormData({ ...formData });
        handleUpdate(formData); // Handle data with the function passed as a prop
    };

    // Used to show the user's age next to their birthday
    const calcAgeUser = () => {
        const birthUser = formData.birthDate;
        const currentDate = new Date();
        const yearBirthUser = birthUser.split('-');
        const ageUser = currentDate.getFullYear() - Number(yearBirthUser[0]);
        if (formData.birthDate !== '') {
            return `Age: ${ageUser} years old`;
        }
    };

    const handleBtnSubmit = () => {
        if (
            formData.userName !== '' &&
            formData.lastName !== '' &&
            formData.birthDate !== '' &&
            formData.gender !== '' &&
            formData.email !== ''
        ) {
            formData.step1 = true; // Set step1 as completed
            setFormData({ ...formData }); // Save the inputs
            handleUpdate(formData); // Handle data with the function passed as a prop
        }
    };

    return (
        <>
            <h2>User Data</h2>
            <div>
                <label htmlFor="userName">Name</label>
                <input
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="Introduce your name"
                    value={formData.userName}
                    onInput={handleInput}
                    required
                />
            </div>
            <div>
                <label htmlFor="lastName">Last name</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Introduce your last name"
                    value={formData.lastName}
                    onInput={handleInput}
                    required
                />
            </div>
            <div>
                <label htmlFor="birthDate">Date of Birth</label>
                <input
                    type="date"
                    name="birthDate"
                    id="birthDate"
                    placeholder="Introduce your birthdate"
                    value={formData.birthDate}
                    onInput={handleInput}
                    required
                />
                <div>
                    <p>{calcAgeUser()}</p>
                </div>
            </div>
            <div className="inputs-group">
                <p>Gender</p>
                <div>
                    <input
                        type="radio"
                        name="gender"
                        id="female"
                        onChange={handleGenderChange}
                    />
                    <label htmlFor="female">Female</label>
                    <input
                        type="radio"
                        name="gender"
                        id="male"
                        onChange={handleGenderChange}
                    />
                    <label htmlFor="male">Male</label>
                </div>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Introduce your email"
                    value={formData.email}
                    onInput={handleInput}
                    required
                />
            </div>
            <div className="input-side">
                <input
                    type="checkbox"
                    checked={formData.isChecked}
                    onChange={handleChange}
                />
                <label htmlFor="checkNewsletter">
                    Do you want to receive information from our newsletter?
                </label>
            </div>
            <div>
                <button type="submit" onClick={handleBtnSubmit}>
                    Save
                </button>
            </div>
        </>
    );
}
