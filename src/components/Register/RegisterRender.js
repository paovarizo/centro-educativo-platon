import './Register.scss'
import Grid from '@mui/material/Grid';
import Animation from '../../assets/register-animation.gif'
import { useEffect, useState } from 'react';
export const RegisterRender = ()=> {
    const [inputDate, setInputDate] = useState('');
    const [displayMenor, setDisplayMenor] = useState(false);
    const handleChangeDate= (event)=> {
        setInputDate(event.target.value)
    }
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
                        <input className='input-name'/>
                        <label>Correo electronico</label>
                        <input className='input-mail'/>
                        <label>Fecha de nacimiento</label>
                        <input className='input-date-birth' type='date' value={inputDate} onChange={handleChangeDate}/>
                        {
                            displayMenor &&                         
                            <>
                            <label>Nombre completo del padre o tutor</label>
                            <input className='input-name-parents'/>
                            </>
                        }
                        <label>Contraseña</label>
                        <input className='input-password' type='password'/>
                        <button className='button-enter'>CONFIRMAR REGISTRO</button>
                    </div>
                </Grid>
                <Grid item xs={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div>
                        <img src={Animation}/>
                    </div>
                </Grid>
            </Grid>
        </div>
        </>
    )
}