
import * as React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fab from '@mui/material/Fab';
import Maps from '../../assets/google-maps.png'
import AddIcon from '@mui/icons-material/Add';

import './Home.scss'
import animation from '../../assets/animation-home.gif'
const PriceCard = (price, title)=>{
    return <div className='price-card'>
        <div className='price-card-container'>
            <p>{title}</p>
            <p>{price}</p>
        </div>
        </div>
};
export const HomeRender = ()=> {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };
    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
    return(
        <>
        <div className='Grid-container'>
            <Grid container spacing={2}>
                <Grid item xs={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div >
                        <h1 style={{textAlign: 'center'}}>ATENCIÓN PSICOLOGICA</h1>
                        <h2 style={{textAlign: 'center', textDecoration: 'underline'}}>Enfoque cognitivo conductual</h2>
                        <br/>
                        <p style={{textAlign: 'center'}}>Brindamos atención psicologica presencial y en linea</p>
                        <Grid container spacing={2} className='container-buttons'>
                            <Grid item xs={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <div>
                                    <button className='button-filled-light-blue'>CONOCENOS MÁS</button>
                                </div>
                            </Grid>
                            <Grid item xs={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <div>
                                    <button className='button-filled-dark-blue'>REGISTRATE</button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div>
                        <img src={animation}/>
                    </div>
                </Grid>
            </Grid>
        </div>
        <div className='our-services-container'>
            <h2>Nuestros servicios</h2>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Atención psicologica" {...a11yProps(0)} />
                    <Tab label="Atención psicologica para tu empresa" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <div className='introduction'>
                Somos un centro que brinda atención psicológica a niños, jóvenes y adultos. 
                Contamos con especialistas en enfoque <strong>cognitivo conductual</strong>.
                Las sesiones pueden ser presenciales o a través de videollamadas y tienen una duración de 45 minutos. Contamos con horarios de lunes a sábado de 9:00 am a 6:55 pm y domingos de 9:00 am a 2:00 pm.
                Se puede acceder a descuentos y promociones para estudiantes, personal médico y adultos mayores.
                </div>
                <TabPanel value={value} index={0}>
                    <Accordion >
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}> <strong>Atención psicologica individual</strong></AccordionSummary>
                        <AccordionDetails>
                            <p>Los casos más atendidos son Trastornos de ansiedad, depresión, suicidio, estrés, duelo, manejo de emociones, habilidades sociales cognitivas, comunicación, adicciones, baja autoestima, toma de decisiones, inseguridad, abuso sexual, esquizofrenia, trastorno bipolar, trastorno de pánico, fobias, déficit de atención e hiperactividad, trastornos de alimentación, trastornos de la personalidad, trastornos del estado de ánimo.</p>
                            <p><strong>Precio:</strong></p>
                           {PriceCard('$300.00', 'Atención psicologica individual')} 
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}> <strong>Atención psicologica familiar</strong></AccordionSummary>
                        <AccordionDetails>
                            <p>Es un servicio cuyo objetivo es modificar las dinámicas relacionales interfamiliares para mejorarlas y aportar bienestar a los integrantes .</p>
                            <p><strong>Precio:</strong></p>
                           {PriceCard('$400.00', 'Atención psicologica familiar')} 
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}> <strong>Atención psicologica en pareja</strong></AccordionSummary>
                        <AccordionDetails>
                            <p>Los casos mas atendidos son violencia, infidelidad, celos y abuso sexual.</p>
                            <p><strong>Precio:</strong></p>
                           {PriceCard('$530.00', 'Atención psicologica en pareja')} 
                        </AccordionDetails>
                    </Accordion>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}> <strong>Atención de 1-10 colaboradores</strong></AccordionSummary>
                        <AccordionDetails>
                            <div>
                                <h4>Paquete basico</h4>
                                <p>1. Atención psicológica para colaboradores de tu empresa durante todo un año por: $4,000.00 mensual.</p>
                                <p>El colaborador sólo paga $150.00 por sesión.</p>
                            </div>
                            <div>
                                <h4>Paquete premium</h4>
                                <p>1. Atención psicológica para colaboradores de tu empresa durante todo un año por: $6,500.00 mensual.</p>
                                <p>El colaborador sólo paga $100.00 por sesión.</p>
                                <p>2. Dos talleres para colaboradores de forma anual que se imparten en tus instalaciones.</p>
                            </div>
                            <div>
                                <h4>Paquete gold</h4>
                                <p>1. Atención psicológica para colaboradores de tu empresa durante todo un año por: $10,00.00 mensual.</p>
                                <p>El colaborador no pagará por sesión.</p>
                                <p>2. Cuatro talleres para colaboradores de forma anual que se imparten en tus instalaciones.</p>
                                <p>3. Atención psicológica individual a familiares directos de colaboradores sin costo</p>
                            </div>
                            <small>* Todos los paquetes son deducibles de impuestos e incluyen IVA.</small>
                            <br/>
                            <small>* Para terapias en pareja y familiares de colaboradores se aplican términos y condiciones directo con el centro</small>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}> <strong>Atención de 11-25 colaboradores</strong></AccordionSummary>
                        <AccordionDetails>
                            <div>
                                <h4>Paquete basico</h4>
                                <p>1. Atención psicológica para colaboradores de tu empresa durante todo un año por: $8,200.00 mensual.</p>
                                <p>El colaborador sólo paga $150.00 por sesión.</p>
                            </div>
                            <div>
                                <h4>Paquete premium</h4>
                                <p>1. Atención psicológica para colaboradores de tu empresa durante todo un año por: $14,000.00 mensual.</p>
                                <p>El colaborador sólo paga $100.00 por sesión.</p>
                                <p>2. Dos talleres para colaboradores de forma anual que se imparten en tus instalaciones.</p>
                            </div>
                            <div>
                                <h4>Paquete gold</h4>
                                <p>1. Atención psicológica para colaboradores de tu empresa durante todo un año por: $20,00.00 mensual.</p>
                                <p>El colaborador no pagará por sesión.</p>
                                <p>2. Cuatro talleres para colaboradores de forma anual que se imparten en tus instalaciones.</p>
                                <p>3. Atención psicológica individual a familiares directos de colaboradores sin costo</p>
                            </div>
                            <small>* Todos los paquetes son deducibles de impuestos e incluyen IVA.</small>
                            <br/>
                            <small>* Para terapias en pareja y familiares de colaboradores se aplican términos y condiciones directo con el centro</small>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}> <strong>Atención de 26-50 colaboradores</strong></AccordionSummary>
                        <AccordionDetails>
                            <div>
                                <h4>Paquete basico</h4>
                                <p>1. Atención psicológica para colaboradores de tu empresa durante todo un año por: $18,500.00 mensual.</p>
                                <p>El colaborador sólo paga $150.00 por sesión.</p>
                            </div>
                            <div>
                                <h4>Paquete premium</h4>
                                <p>1. Atención psicológica para colaboradores de tu empresa durante todo un año por: $30,000.00 mensual.</p>
                                <p>El colaborador sólo paga $100.00 por sesión.</p>
                                <p>2. Dos talleres para colaboradores de forma anual que se imparten en tus instalaciones.</p>
                            </div>
                            <div>
                                <h4>Paquete gold</h4>
                                <p>1. Atención psicológica para colaboradores de tu empresa durante todo un año por: $40,00.00 mensual.</p>
                                <p>El colaborador no pagará por sesión.</p>
                                <p>2. Cuatro talleres para colaboradores de forma anual que se imparten en tus instalaciones.</p>
                                <p>3. Atención psicológica individual a familiares directos de colaboradores sin costo</p>
                            </div>
                            <small>* Todos los paquetes son deducibles de impuestos e incluyen IVA.</small>
                            <br/>
                            <small>* Para terapias en pareja y familiares de colaboradores se aplican términos y condiciones directo con el centro</small>
                        </AccordionDetails>
                    </Accordion>
                </TabPanel>
            </Box>
        </div>
        <div className='our-locations'>
            <h2>Nuestras ubicaciones</h2>
            <div className='grid-container-maps-container'>
                <Grid container spacing={2} className='grid-container-maps'>
                    <Grid item xs={6}>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <img src={Maps} className='maps-image'/>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <a href='https://maps.app.goo.gl/X5VZzcRYrGbiUqXw9' className='link-maps'>Dr. José María Vertiz 995, Narvarte Oriente, Benito Juárez, 03020 Ciudad de México, CDMX.</a>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <img src={Maps} className='maps-image'/>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <a href='https://maps.app.goo.gl/37dLEg8vfgENzjQT8' className='link-maps'>Av. Tlahuac 521, Zona Urbana Ejidal San Andrés Tomatlán, Iztapalapa, 09080 Ciudad de México, CDMX.</a>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-end', marginRight: '50px'}}>
            <Fab aria-label="add" sx={{position: 'fixed', top: '80vh'}} href='https://wa.link/3dredf' target='_blank'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/7/75/Whatsapp_logo_svg.png' style={{width: '65px'}}/>
            </Fab>
            <Fab color="primary" aria-label="add" sx={{position: 'fixed', top: '88vh'}} href='http://m.me/CentroEducativoPlaton' target='_blank'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/1024px-Facebook_Messenger_logo_2020.svg.png' style={{width: '55px'}}/>
            </Fab>
        </div>
        
        </>
    )
}