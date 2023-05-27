import React, { useEffect, useState } from 'react'
import { ChatState } from '../context/ChatProvider'
import { Box } from "@chakra-ui/layout";
import SideDrawer from '../components/miscelleneous/SideDrawer';
import { useHistory } from "react-router";
import MyChats from '../components/MyChats';

const Chatpage = () => {
  const [loggedUser, setLoggedUser] = useState();

  const { user } = ChatState();
  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    // console.log(userInfo);
    if (!userInfo) {
      history.push('/');
    }
  }, [history])


  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats />}
        {/* {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )} */}
      </Box>
    </div>
  )
}

export default Chatpage