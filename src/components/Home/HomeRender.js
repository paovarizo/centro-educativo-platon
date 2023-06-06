
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
import AddIcon from '@mui/icons-material/Add';

import './Home.scss'
import animation from '../../assets/animation-home.gif'
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
                <TabPanel value={value} index={0}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}> <strong>Terapia psicologica</strong></AccordionSummary>
                        <AccordionDetails>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}> <strong>Terapia de pareja o familiar</strong></AccordionSummary>
                        <AccordionDetails>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}> <strong>Orientación</strong></AccordionSummary>
                        <AccordionDetails>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}><strong>Canalización</strong></AccordionSummary>
                        <AccordionDetails>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                        </AccordionDetails>
                    </Accordion>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Atención psicologica para tu empresa
                </TabPanel>
            </Box>
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-end', marginRight: '50px'}}>
            <Fab color="primary" aria-label="add" sx={{position: 'fixed', top: '80vh'}} href='https://wa.link/3dredf' target='_blank'>
                <AddIcon />
            </Fab>
            <Fab color="primary" aria-label="add" sx={{position: 'fixed', top: '88vh'}} href='http://m.me/CentroEducativoPlaton' target='_blank'>
                <AddIcon />
            </Fab>
        </div>
        
        </>
    )
}