import React from 'react'
import { Alert, Button, Divider, Drawer } from 'rsuite'
import { useProfile } from '../../context/profile.context'
import EditableInput from './EditableInput';
import { database } from '../../misc/firebase';
import ProviderBlock from './ProviderBlock';

const Dashboard = ({onSignOut}) => {
    const {profile} = useProfile();
    const onSave =  async newData => {
     const userNicknameRef =   database.ref(`/profiles/${profile.uid}`).child('name');

     try {

        await userNicknameRef.set(newData);

        Alert.success('Nickname Updated',4000);
        
     } catch (err) {

        Alert.success(err.message , 4000);
        
     }
    };
  return (
    <>

    <Drawer.Header>

      <Drawer.Title>

      DashBoard

      </Drawer.Title>

      </Drawer.Header>

      <Drawer.Body>
      <h3>hey, {profile.name} </h3>

      <ProviderBlock />

      <Divider />
      <EditableInput 
        name="nickname"
        initialValue = {profile.name}
        onSave= {onSave}
        label = {<h6 className="mb-2" >Nickname</h6>}
      />

      </Drawer.Body>

      <Drawer.Footer>
      <Button block color ="red" onClick={onSignOut}  >
      Sign out

      </Button>

      </Drawer.Footer>

     

    


    </>
  )
}

export default Dashboard 