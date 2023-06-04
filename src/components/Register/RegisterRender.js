import './Register.scss'
import Grid from '@mui/material/Grid';
import Animation from '../../assets/register-animation.gif'
import { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';

export const RegisterRender = ()=> {
    const [inputDate, setInputDate] = useState('');
    const [displayMenor, setDisplayMenor] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [parents, setParents] = useState('');

    const handleChangeDate= (event)=> {
        setInputDate(event.target.value)
    }
    const handleChangeMail = (event)=>{
        setEmail(event?.taget?.value);
    }
    const handlePassword = (event)=>{
        setPassword(event?.target?.value);
    }
    const handleChangeName = (event)=>{
        setName(event?.taget?.value);
    }
    const handleParents = (event)=>{
        setParents(event?.target?.value);
    }
    const handleSubmitLogin =()=>{
        if(displayMenor){
            if(email === '' || password === '' || parents=== '' || inputDate==='' || name==='' ){
                handleClick()
            }
        }else{
            if(email === '' || password === ''  || inputDate==='' || name==='' ){
                handleClick()
            }   
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
    useEffect(()=>{
        const new_date = new Date(inputDate)
        const actual_date = new Date()
        const age = actual_date.getFullYear() - new_date.getFullYear()
        age <= 15 ? setDisplayMenor(true) : setDisplayMenor(false)
    },[inputDate, displayMenor])
    return(
        <>
        <div className='Grid-container'>
            <Grid container spacing={2} className='Container'>
                <Grid item xs={6} sx={{display: 'flex', justifyContent: 'center'}}>
                    <div>
                        <h1>¡HOLA!</h1>
                        <br></br>
                        <p>Por favor llena los siguientes campos :</p>
                        <label>Nombre completo</label>
                        <input className='input-name' onChange={handleChangeName} value={name}/>
                        <label>Correo electronico</label>
                        <input className='input-mail' onChange={handleChangeMail} value={email}/>
                        <label>Fecha de nacimiento</label>
                        <input className='input-date-birth' type='date' value={inputDate} onChange={handleChangeDate}/>
                        {
                            displayMenor &&                         
                            <>
                            <label>Nombre completo del padre o tutor</label>
                            <input className='input-name-parents' onChange={handleParents} value={parents}/>
                            </>
                        }
                        <label>Contraseña</label>
                        <input className='input-password' type='password' onChange={handlePassword} value={password}/>
                        <button className='button-enter' onClick={handleSubmitLogin}>CONFIRMAR REGISTRO</button>
                    </div>
                </Grid>
                <Grid item xs={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div>
                        <img src={Animation}/>
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