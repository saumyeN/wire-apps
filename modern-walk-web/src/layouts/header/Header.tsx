import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from "react-router-dom";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleOnClick = () => {
    navigate("/");
  }
  return (
    <Box>
      <AppBar className={"header" + (isSticky ? " sticky" : "")}>
        <Toolbar>
          <div className="header-title" onClick={handleOnClick}>
            Modern Walk
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;