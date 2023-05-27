import { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

const ChatContext = createContext()


const ChatProvder = ({ children }) => {
    const [user, setuser] = useState();
    const history = useHistory();
    const [chats, setChats] = useState();
    const [selectedChat, setSelectedChat] = useState();
    const [notification, setNotification] = useState([]);


    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        setuser(userInfo);
    }, [history])


    return <ChatContext.Provider value={{ user, setuser, chats, setChats, selectedChat, setSelectedChat, notification, setNotification }}>
        {children}
    </ChatContext.Provider>
}



export const ChatState = () => {
    return useContext(ChatContext);
}

export default ChatProvder;