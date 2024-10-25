import Header from "../Header";
import Footer from "../Footer";
import { Box } from "@mui/material";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Box className={styles.container}>
        <Header />
        <Box className={styles.content}>{children}</Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
