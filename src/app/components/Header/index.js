import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <Box
        className={styles.container}
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={2}
      >
        {/* Left Logo */}
        <Box flexGrow={1} display="flex" justifyContent="flex-start">
          <a href="https://www.achieve.com">
            <Image
              alt="Achieve Logo"
              width={200}
              height={50}
              src="https://images.ctfassets.net/b32zuu6bt176/15HPtgMPAQQoYsMTbp079v/160c1a03ea96fd6cc7327df68ea93916/achieve_logo.png"
            />
          </a>
        </Box>

        {/* Right Logo */}
        <a href="/search">
          <Image
            alt="Customer Journey Logo"
            width={200}
            height={100}
            src="/eyelogo.png"
          />
        </a>
      </Box>
    </header>
  );
};

export default Header;
