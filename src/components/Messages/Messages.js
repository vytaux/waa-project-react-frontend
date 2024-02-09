import React, { useContext, useState } from 'react'
import MessageBox from '../MessageBox';
import useFetch from '../../hooks/useFetch';
import UserContext from '../../context/UserContext';
import axios from '../../config/Api';
import './Messages.css';

export default function Messages(props) {

    const { userId, setMessageSessionRefresh } = props;
    const currentUser = useContext(UserContext);
    const [isSendLoading, setIsSendLoading] = useState(false);

    const {data: messages, setRefresh: setMessagesRefresh} = useFetch(`users/${userId}/messages`, currentUser.accessToken);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSendLoading(true);

        axios.post(`users/${userId}/messages`, Object.fromEntries(new FormData(e.target)), {headers: {Authorization: "Bearer " + currentUser.accessToken}})
            .then(response => {
                setMessagesRefresh(refresh => !refresh);
                setMessageSessionRefresh(refresh => !refresh);
                e.target.reset();
            })
            .catch(err => console.log(err))
            .finally(() => setIsSendLoading(false))
    }

    return (
        <div className='content'>
            <div className='content-message'>
                { messages && messages.map(message => (
                    <MessageBox key={message.id} message={message} />
                )) }
            </div>

            <div className='content-form'>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="message" placeholder="Type your message" />
                    { isSendLoading && <button disabled>Sending...</button> }
                    { !isSendLoading && <button>Send</button> }
                </form>
            </div>
        </div>
    )
}
