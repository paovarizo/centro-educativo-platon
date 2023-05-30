import './Login.scss'
import Grid from '@mui/material/Grid';
export const LoginRender = ()=> {
    return(
        <>
        <div className='Grid-container'>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div>xs=8</div>
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
                            <p>Olvide mi contraseña</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
        </>
    )
}