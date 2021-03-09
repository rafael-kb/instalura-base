import React from 'react';
import Button from '../src/components/commons/Button';
import Text from '../src/components/foundation/Text';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import Grid from '../src/components/foundation/layout/Grid';
import Box from '../src/components/foundation/layout/Box';
import Modal from '../src/components/commons/Modal';
import SignUpForm from '../src/components/patterns/SignUpForm';

export default function Home() {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <Box
      flex={1}
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        {(modalProps) => (
          <SignUpForm modalProps={modalProps} />
        )}
      </Modal>

      <Menu />

      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px',
        }}
      >
        <Grid.Row>
          <Grid.Col
            offset={1}
            value={{ xs: 12, md: 5 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <div>
              <Text
                variant="title"
                tag="h1"
                color="tertiary.main"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Compartilhe momentos e conecte-se com amigos
              </Text>
              <Text
                variant="paragraph1"
                tag="p"
                color="tertiary.light"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
              </Text>
              <Button
                variant="primary.main"
                margin={{
                  xs: 'auto',
                  md: 'initial',
                }}
                display="block"
                onClick={() => setModalState(!isModalOpen)}
              >
                Cadastrar
              </Button>
            </div>
          </Grid.Col>
          <Grid.Col value={{ xs: 12, md: 6 }}>
            <img style={{ display: 'block', margin: 'auto' }} alt="Home Screen Phone" src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png" />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Footer />
    </Box>

  );
}
