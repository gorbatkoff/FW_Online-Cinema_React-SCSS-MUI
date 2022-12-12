import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import styles from './RoomPage.module.scss';
import { InputRounded } from '@mui/icons-material';
import { Button } from '@mui/material';


function enterTheRoom(){
  alert('Enter the Room')
}


function RoomPage() {

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };


  return (
    <div className={styles.room}>
      <h2 align="center">Введите ID комнаты и Ваше имя в форме ниже</h2>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{width: '100%', textAlign: 'center'}}>

          <TextField id="standard-basic" label="Standard" variant="standard" sx={{ width: "40%" }} />
            
            <br />

          <TextField id="standard-basic" label="Standard" variant="standard" sx={{ width: "20%" }} />

          <br />

          <Button variant="outlined" sx={{marginTop: "2em"}}
          onClick={enterTheRoom}
          >Войти</Button>
        </div>
      </div>

    </div>
  )
}

export default RoomPage