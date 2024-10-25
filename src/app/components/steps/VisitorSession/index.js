"use client";

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Layout from "../../Layout";
import styles from "./VisitorSession.module.scss";

const VisitorSession = (props) => {
  // const [email, setEmail] = useState("");

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const emailVal = new URLSearchParams(window.location.search).get("email");
  //     setEmail(emailVal || "");
  //   }
  // }, []);

  return (
    <>
      <Layout>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="680px"
          padding={2}
        >
          <Typography variant="h4" gutterBottom>
            Visitor Sessions
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Show all your sessions
          </Typography>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="100%"
            maxWidth="400px"
          >
            <List className={styles.list}>
              {props.sessions.map((session, index) => (
                <ListItem
                  key={index}
                  className={styles.listItem}
                  gutters="10px"
                >
                  <ListItemButton component="a" href="/app-visit">
                    <ListItemText primary={`Session ${index + 1}`} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default VisitorSession;