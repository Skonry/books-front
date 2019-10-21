import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';

function Home() {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column style={{display: 'flex', justifyContent: 'flex-end'}}>
          <LoginForm />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns='2'>
        <Grid.Column>
          Coś tam
        </Grid.Column>
        <Grid.Column>
          <Header as='h1'>Create a New Account</Header>
          <RegistrationForm />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Home;