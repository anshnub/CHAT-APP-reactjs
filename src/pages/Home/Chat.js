import React from 'react'
import Messages from '../../components/chat-window/messages'
import Top from '../../components/chat-window/top'
import Bottom from '../../components/chat-window/bottom'
import { useRooms } from '../../context/rooms.context'
import {useParams} from 'react-router'
import { Loader } from 'rsuite'
import { CurrentRoomProvider } from '../../context/current-room.context'

const Chat = () => {

    const {chatId} = useParams();

    const rooms = useRooms();

    if(!rooms){
        return <Loader center vertical size="md" content="Loading" speed="slow" />  
    }

    const currentRoom = rooms.find(room=> room.id===chatId);

    if(!currentRoom){
        return <h6 className='text-center mt-page' > Chat {chatId} not found </h6>
    }

    const {name,description} = currentRoom;
    
    const currentRoomData = {
        name,
        description,

    }

  return (
    <CurrentRoomProvider data={currentRoomData}>

        <div className='chat-top' >
            <Top />
        </div>

        <div className='chat-middle' >
            <Messages />
        </div>

        <div className='chat-bottom' >
            <Bottom/>
        </div>
    </CurrentRoomProvider>
  )
}

export default Chat