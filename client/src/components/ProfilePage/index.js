import React from 'react';
import UserImage from './UserImage';
import UserForm from './UserForm';
import PasswordForm from './PasswordForm';
import styled from 'styled-components';


const ProfilePage = () => (
  <>
    <h1>Profile Page</h1>
    <UserImage />
    <UserForm />
    <PasswordForm />
  </>
);

export default ProfilePage;
