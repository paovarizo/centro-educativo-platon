import './Login.scss'
import Grid from '@mui/material/Grid';
import Animation from '../../assets/login-animation.gif'
export const LoginRender = ()=> {
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
                        <input className='input-mail'/>
                        <label>Contraseña</label>
                        <input className='input-password'/>
                        <button className='button-enter'>INGRESAR</button>
                        <div className='Container-forgot-password'>
                            <a href='/recover'>Olvide mi contraseña</a>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
        </>
    )
}