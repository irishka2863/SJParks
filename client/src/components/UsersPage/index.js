import React from 'react';
import UsersForm from './UsersForm';
import UsersList from './UsersList';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 50%;
  .usersForm{
    max-width: 300px;
    margin: 0 50px 50px 0;
  }
  @media screen and (max-width: ${(props) => props.theme.displays.tablet}) {
    width: 100%;
    .usersForm{
      padding: 0 10px;
      margin: 0 auto;
    }
    .usersList{
      margin: 40px 0;
    }
  }

  @media screen and (max-width: ${props => props.theme.displays.mobileL}) {
    .usersForm {
      margin: auto;
    }
  }
`;

const Users = () => (
  <>
    <Wrapper>
      <UsersForm />
    </Wrapper>
    <Wrapper>
      <UsersList />
    </Wrapper>
  </>
);

export default Users;
