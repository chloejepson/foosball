import logo from './soccer-field.jpeg';
import './App.css';

import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { green } from '@mui/material/colors';

function App() {
  return (
    <div className="App">
      <AppBar position="static" sx={{ bgcolor: "darkgreen" }}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Foosball Tournament Referee
          </Typography>
        </Toolbar>
      </AppBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Foosball Tournament Referee ©2022,  ChloeJ LLC.
        </p>
      </header>
    </div>
  );
}

export default App;
