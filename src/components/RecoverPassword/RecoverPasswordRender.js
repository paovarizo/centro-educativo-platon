import './RecoverPassword.scss'

export const RecoverPasswordRender = ()=> {
    return(
        <>
            <div className="recover-container">
                <div className="recover-input-container">
                    <div className='title-container'>
                        <h1>RECUPERA TU CONTRASEÑA</h1>
                        <p>Ingresa tu correo electronico para recibir instrucciones.</p>
                    </div>
                    <div className='input-container-recover'>
                        <div>
                        <label>Correo electronico</label>
                        <input className='input-mail'/>
                        <button className='button-enter'>INGRESAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}