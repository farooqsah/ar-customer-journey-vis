import { Box, Typography } from '@mui/material';
import Layout from '../components/Layout';

const VisitorSession = () => {

  return (
    <>
    <Layout>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight='680px'
      padding={2}
    >
      <Typography variant="h4" gutterBottom>
        Visitor Session
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Show all your sessions
      </Typography>
      <Box
        component="form"
        // onSubmit={handleSubmit(onSubmit)}
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        maxWidth="400px"
      >
          <Typography variant="subtitle1" gutterBottom>
        Session 1
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Session 2
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Session 4
      </Typography>
      </Box>
    </Box>
    </Layout>
    </>
  );
};

export default VisitorSession;