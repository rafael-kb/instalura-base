import React from 'react';
import { Lottie } from '@crello/react-lottie';
import errorAnimation from './animations/error.json';
import successAnimation from './animations/success.json';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

const formStates = {
  DEFAULT: 'default',
  LOADING: 'loading',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);
  const [userInfo, setUserInfo] = React.useState({
    username: '',
    email: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormValid = userInfo.username.length === 0 || userInfo.email.length === 0;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setIsFormSubmitted(true);
        fetch('https://instalura-api.vercel.app/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: userInfo.email, name: userInfo.username }),
        }).then((resp) => {
          if (resp.ok) {
            return resp.json();
          }
          throw new Error('An Error has occurred. :(');
        }).then((json) => {
          setSubmissionStatus(formStates.DONE);
          // eslint-disable-next-line no-console
          console.log(json);
        }).catch((error) => {
          setSubmissionStatus(formStates.ERROR);
          // eslint-disable-next-line no-console
          console.error(error);
        });
      }}
    >
      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está
        rolando no bairro, complete seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder="Email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          placeholder="Usuário"
          name="username"
          value={userInfo.username}
          onChange={handleChange}
        />
      </div>

      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormValid}
        fullWidth
      >
        Sing Up
      </Button>

      {isFormSubmitted && submissionStatus === formStates.DONE && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            config={{ animationData: successAnimation, loop: false, autoplay: true }}
          />
        </Box>
      )}

      {isFormSubmitted && submissionStatus === formStates.ERROR && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            config={{ animationData: errorAnimation, loop: false, autoplay: true }}
          />
        </Box>
      )}
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function SignUpForm({ modalProps }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...modalProps}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
