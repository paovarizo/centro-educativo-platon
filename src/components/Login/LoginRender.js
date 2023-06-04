import './Login.scss'
import Grid from '@mui/material/Grid';
import Animation from '../../assets/login-animation.gif'
import React, { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';

export const LoginRender = ()=> {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeMail = (event)=>{
        setMail(event?.taget?.value);
    }
    const handlePassword = (event)=>{
        setPassword(event?.target?.value);
    }
    const handleSubmitLogin =()=>{
        if(mail === '' || password === ''){
            handleClick()
        }
    }
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    return(
        <>
        <div className='Grid-container'>
            <Grid container spacing={2}>
                <Grid item xs={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div>
                        <img src={Animation} />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <h1>¡HOLA!</h1>
                        <br></br>
                        <p>Por favor llena los siguientes campos :</p>
                        <label>Correo electronico</label>
                        <input className='input-mail' onChange={handleChangeMail} value={mail}/>
                        <label>Contraseña</label>
                        <input className='input-password' onChange={handlePassword} value={password}/>
                        <button className='button-enter' onClick={handleSubmitLogin}>INGRESAR</button>
                        <div className='Container-forgot-password'>
                            <a href='/recover'>Olvide mi contraseña</a>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
        <Snackbar open={open} onClose={handleClose} autoHideDuration={2000}>
            <Alert onClose={handleClose} severity="error">
            Por favor llena todos los campos
            </Alert>
        </Snackbar>
        </>
    )
}