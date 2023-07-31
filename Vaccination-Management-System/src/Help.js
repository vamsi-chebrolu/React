import './Help.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from './Footer';
import { FooterEnd } from './FooterEnd';
import Header from './Header';


export function Help() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
    <Header></Header>
        <div
        className="helpR">
        <h2>Help and Resources</h2>
      </div>
      <div className="para">
        {" "}
        <p
        >
          This section provides additional information and resources related to
          vaccination. You can find frequently asked questions (FAQs) and
          support for vaccination providers here.
        </p>
      </div>

      <div
        className="Frequent"
      >
        {" "}
        <h2> Frequently Asked Questions </h2>
      </div>
      
    <div className="questions">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
          1.Where can I register for COVID-19 vaccination?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can open the Calibrum Ltd portal and click on the “Register/Sign
          In” tab to register for COVID-19 vaccination, and follow the steps
          thereafter.{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>2.Is there a mobile app that needs to be installed to register for
          vaccination?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          There is no authorised mobile app for registering for vaccination in
          India.{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
          3.Which age groups can register for vaccination on the Co-WIN portal?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          All beneficiaries who have completed 12 years of age and above on the
          day of registration (birth year 2011 or earlier) can register for
          vaccination.{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>4.Is online registration mandatory for COVID-19 vaccination?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          No, vaccination centers provide for a limited number of on-spot
          registration slots every day. Beneficiaries can register online or
          walk-in to vaccination centers where the vaccination team staff can
          register a beneficiary.<br></br> In general, all beneficiaries are recommended
          to register online and schedule vaccination in advance for a
          hassle-free vaccination experience.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>5.How many people can be registered in the Co-WIN portal through one
          mobile number?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Up to 6 people can be registered for vaccination using the same mobile
          number.
          </Typography>
        </AccordionDetails>

      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}> 6.Have the vaccines undergone the needed clinical trials before EUA? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          All vaccines have conducted their phase I, II & III clinical trials before EUA and only
after these clinical trials, they have been granted EUA by CDSCO.
          </Typography>
        </AccordionDetails>
      </Accordion>


    
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}> 7. Is vaccination for COVID-19 mandatory? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          As per the operational guidelines issued by the GOI and disseminated to all States/ UTs
the COVID-19 vaccination is totally voluntary; however, all individuals are encouraged
to take vaccination for protecting themselves and their families from serious Covid-19
infection.
          </Typography>
        </AccordionDetails>
      </Accordion>



      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}> 8. Who are eligible for Precaution dose? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The following types of beneficiaries who are fully vaccinated (with 2 doses) and have
completed 6 months (26 weeks) after the 2nd dose, as per the records available on CoWIN, are eligible to take precaution dose.
<br></br> a. Health Care Workers (HCW)
<br></br> b. Frontline Workers (FLW)
<br></br> c. Citizens aged 60 years and more. It is availed at all Government CVCs free of
cost and Private CVCs in all States/UTs <br></br>
Under Covid Vaccination Amrit Mahostav,all Citizens aged 18 years and more are
eligible for Precaution dose free of cost at Govt CVCs. and also eligible for precaution
dose at private CVCs on a payment basis.
          </Typography>
        </AccordionDetails>
      </Accordion>



      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9bh-content"
          id="panel9bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}> 9. What is the dose schedule of the vaccines under the national Covid-19 vaccination
program?
 </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In the National Covid-19 vaccination programme following dose schedule is as followed:
<br></br> o Covishield®: two doses, an interval of 12-16 weeks (84-112 days)
<br></br> o Covaxin®: two doses at an interval of 4-6 weeks (28-42 days)
<br></br> o CorBEvax: two doses at an interval of 4 weeks (28 days)
<br></br> o Covovax: two doses at an interval of 3 weeks (21 Days)
<br></br> o Sputnik V: two doses at an interval of 3 weeks (21 days)
<br></br> o ZyCoV-D : two doses at an interval of 4 weeks (28 days)
<br></br> o Precaution dose (with the same vaccine or with CorBEvax following primary
vaccination of Covishield & Covaxin), at an interval of 6 months (26 weeks) from the
date of administration of 2nd dose.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>   
    <Footer></Footer>
    <FooterEnd></FooterEnd>
    </>
  );
};












{/*

<div className="footer">
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright
        
      </div>
    </MDBFooter>

    </div>
   


*/}