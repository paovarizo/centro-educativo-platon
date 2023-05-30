import './Register.scss'
import Grid from '@mui/material/Grid';
export const RegisterRender = ()=> {
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
                        <input className='input-date-birth'/>
                        <label>Contraseña</label>
                        <input className='input-password'/>
                        <button className='button-enter'>CONFIRMAR REGISTRO</button>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>xs=8</div>
                </Grid>
            </Grid>
        </div>
        </>
    )
}