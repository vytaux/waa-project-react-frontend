import { useContext, useState } from 'react'
import Messages from '../../components/Messages/Messages'
import useFetch from '../../hooks/useFetch'
import MessageSession from '../../components/MessageSession';
import UserContext from '../../context/UserContext';
import './Message.css';

export default function Message() {

    const currentUser = useContext(UserContext);

    const [userId, setUserId] = useState(null);
    const {data: messageSessions, setRefresh: setMessageSessionRefresh} = useFetch("message-sessions", currentUser.accessToken);

    return (
        <div className='message'>
            <div className='sidebar'>
                { messageSessions && messageSessions.map(messageSession => (
                    <MessageSession 
                        key={messageSession.id} 
                        messageSession={messageSession} 
                        setUserId={setUserId}
                    /> 
                ))}
            </div>

            { userId && <Messages userId={userId} setMessageSessionRefresh={setMessageSessionRefresh}     /> }
        </div>
    )
}
