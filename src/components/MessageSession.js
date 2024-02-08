import React from 'react'

export default function MessageSession(props) {

    const { messageSession, setUserId } = props;

    const handleClick = () => setUserId(messageSession.user.id);

    return (
        <div className='message-session box' onClick={handleClick}>
            <img src="/user.png" alt="User" />
            <div className='text'>
                <p className='user'>{ messageSession.user.email }</p>
                <p className='text-message'>{ messageSession.messages[messageSession.messages.length-1].message }</p>
            </div>
        </div>
    );
}
