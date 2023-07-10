import {useState} from "react";

export default function AddUser(props){
    const [userData, setUserData] = useState({
        username: '',
        age: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        let errorMsg;

        if (userData.age.trim().length !== 0 && userData.username.trim().length !== 0){
            if (+userData.age < 0){
                errorMsg = 'Please enter a valid age.';
                props.onError(errorMsg);
                return;
            }
        } else{
            errorMsg = 'Please enter non-empty values.';
            props.onError(errorMsg);
            return;
        }

        props.onAddUser(userData);
        setUserData({ username: '', age: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={'username'}>Username</label>
            <input id={'username'} name={'username'} value={userData.username} type={'text'}
            onChange={(e) =>
                setUserData({...userData, username: e.target.value})} />
            <label htmlFor={'age'}>Age (Years)</label>
            <input id={'age'} name={'age'} type={'number'} value={userData.age}
            onChange={(e) =>
                setUserData({...userData, age: e.target.value})} />
            <button type={'submit'}>Add</button>
        </form>
    );
}