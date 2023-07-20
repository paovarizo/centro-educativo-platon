import './Appoiment.scss'
import React, { useEffect, useState } from 'react';

export const AppoimentRender = ()=> {
    const [selectModality, setSelectModality]= useState('')
    const [modalityFlag, setModalityFlag]= useState(false)
    const [sucursalFlag, setSucursalFlag]= useState(false)
    const [selectSucursal, setSelectSucursal]= useState('')
    const handleSelectSucursal =(e)=>{
        setSelectSucursal(e.target.value)
    }
    useEffect(()=>{
        selectSucursal === 'vertiz' ? setSucursalFlag(true) : setSucursalFlag(false)
    },[selectSucursal])
    const handleSelectModality =(e)=>{
        setSelectModality(e.target.value)
    }
    useEffect(()=>{
        selectModality === 'presencial' || selectModality === 'Hibrida' ? setModalityFlag(true) : setModalityFlag(false)
    },[selectModality])
    return(
        <>
            <div className='Container'>
                <div>
                <h1 style={{textAlign: 'center'}}>Por favor ayudanos completando lo siguiente:</h1>
                <div className='select-container'>
                    <div>
                        <label>Nombre completo</label>
                        <input className='input-mail'/>
                        <label>¿En que sucursal te gustaria tu cita?</label>
                        <select name="sucursal" id="sucursal-select" onChange={handleSelectSucursal} className='input-mail'>
                            <option value="">Por favor selecciona una opción</option>
                            <option value="vertiz">Dr. Vertiz</option>
                            <option value="tlahuac">Av. Tlahuac</option>
                        </select>
                        <label>¿Que modalidad te gustaria tu cita?</label>
                        <select name="modalidad" id="modalidad-select" onChange={handleSelectModality} className='input-mail'>
                            <option value="">Por favor selecciona una opción</option>
                            <option value="presencial">Presencial</option>
                            <option value="Online">En Linea</option>
                            <option value="Hibrida">Hibrida</option>
                        </select>
                    </div>
                </div>
                {sucursalFlag &&
                    <div className='select-container'>
                        <div>
                            <label>Selecciona a tu psicologo:</label>
                            <select name="persons" id="persons-select"className='input-mail' >
                                <option value="">Por favor selecciona una opción</option>
                                <option value="psicologo1">Psicologo 1</option>
                                <option value="psicologo2">Psicologo 2</option>
                            </select>
                            <label>Selecciona un dia:</label>
                            <select name="days" id="days-select"className='input-mail' >
                                <option value="">Por favor selecciona una opción</option>
                                <option value="Dia1">Dia 1</option>
                                <option value="Dia2">Dia 2</option>
                                <option value="Dia3">Dia 3</option>
                                <option value="Dia4">Dia 4</option>
                                <option value="Dia5">Dia 5</option>
                                <option value="Dia6">Dia 6</option>
                                <option value="Dia7">Dia 7</option>
                                <option value="Dia8">Dia 8</option>
                            </select>
                            <label>Selecciona una hora:</label>
                            <select name="hours" id="hours-select"className='input-mail' >
                                <option value="">Por favor selecciona una opción</option>
                                <option value="Hora1">Hora 1</option>
                                <option value="Hora2">Hora 2</option>
                                <option value="Hora3">Hora 3</option>
                                <option value="Hora4">Hora 4</option>
                                <option value="Hora5">Hora 5</option>
                                <option value="Hora6">Hora 6</option>
                                <option value="Hora7">Hora 7</option>
                                <option value="Hora8">Hora 8</option>
                            </select>
                        </div>
                    </div>
                }
                {!sucursalFlag &&
                    <div className='select-container'>
                        <div>
                            <label>Selecciona a tu psicologo:</label>
                            <select name="persons-online" id="persons-select-online" className='input-mail'>
                                <option value="">Por favor selecciona una opción</option>
                                <option value="psicologo1">Psicologo 1</option>
                                <option value="psicologo2">Psicologo 2</option>
                                <option value="psicologo3">Psicologo 3</option>
                                <option value="psicologo4">Psicologo 4</option>
                                <option value="psicologo5">Psicologo 5</option>
                                <option value="psicologo6">Psicologo 6</option>
                            </select>
                            <label>Selecciona un dia:</label>
                            <select name="days-online" id="days-select-online" className='input-mail'>
                                <option value="">Por favor selecciona una opción</option>
                                <option value="Dia1">Dia 1</option>
                                <option value="Dia2">Dia 2</option>
                                <option value="Dia3">Dia 3</option>
                                <option value="Dia4">Dia 4</option>
                                <option value="Dia5">Dia 5</option>
                            </select>
                            <label>Selecciona una hora:</label>
                            <select name="hours" id="hours-select-online"className='input-mail'>
                                <option value="">Por favor selecciona una opción</option>
                                <option value="Hora1">Hora 1</option>
                                <option value="Hora2">Hora 2</option>
                                <option value="Hora3">Hora 3</option>
                                <option value="Hora4">Hora 4</option>
                                <option value="Hora5">Hora 5</option>
                            </select>
                        </div>
                    </div>
                }
                <div className='select-container'>
                    <button className='button-enter'>SIGUIENTE</button>
                </div>
                </div>
            </div>
        </>
    )
}