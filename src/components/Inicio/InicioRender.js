import './Inicio.scss'
import Grid from '@mui/material/Grid';
import Animation from '../../assets/empty.gif'
import React, { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';

export const InicioRender = ()=> {
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
            <div className='Container'>
                <div>
                <h1 style={{textAlign: 'center'}}>¡Hola Paola!</h1>
                <p style={{textAlign: 'center'}}>Al parecer aún no tienes citas agendadas</p>
                <img src={Animation} className='img-inicio'/>
                <div style={{display: 'flex', justifyContent: 'center'}}><button className='button-enter'><a href='/appoiment'>Agendar cita</a></button></div>
                </div>
            </div>
        </>
    )
}