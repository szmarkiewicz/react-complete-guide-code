import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import Modal from "./components/Modal/Modal";
import UsersList from "./components/Users/UsersList";


function App() {
    const [showModal, setShowModal] = useState(false);
    const [errorMsg, setErrorMsg] = useState();
    const [usersList, setUsersList] = useState([]);

    return (
        <div>
            <AddUser onAddUser={(usrData) => setUsersList([...usersList, usrData])} onError={(errMsg) => {
                setErrorMsg(errMsg);
                setShowModal(true);
            }}/>
            {showModal && <Modal opened={showModal} errorMsg={errorMsg} onClose={() => setShowModal(false)}/>}
            <UsersList content={usersList}/>
        </div>
    );
}

export default App;
