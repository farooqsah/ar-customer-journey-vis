
import { Box } from '@mui/material';
import styles from './Footer.module.scss';

const Footer = () => {
  
    return (
      <footer className={styles.container}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
        <h2>Copyright @Hackathon 2024</h2> 
        </Box>
      </footer>
    );
}

export default Footer;