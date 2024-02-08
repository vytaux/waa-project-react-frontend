import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

export default function MessageBox(props) {
    const { message } = props;
    const currentUser = useContext(UserContext);

    return (
        message.createdBy === currentUser.email
            ? <div className="sent">
                {message.message}
            </div>
            : <div className="recieved">
                <img src="/user.png" alt="" />
                <div className="recieved-box">
                    <p className='recieved-user'>{message.createdBy}</p>
                    <p className='recieved-message'>{message.message}</p>
                </div>
            </div>
    )
}
