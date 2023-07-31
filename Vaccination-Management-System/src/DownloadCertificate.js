import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneUser } from "./CrudCmps";
import logo from "./Logo.jpeg.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ticklogo from "./ticklogo.jpeg";
import './DownloadCertificate.css'
import Header from "./Header";
import Footer from "./Footer";
import { FooterEnd } from "./FooterEnd";

export const Certificate=()=>
{
    const [loader, setLoader] = useState(false);
  const downloadPDF = () => {
    const capture = document.querySelector(".actual-receipt");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("Vaccination_Certificate.pdf");
    });
  };


    const [x, setX]=useState([]);
    const navigate=useNavigate();
    const email=localStorage.getItem('email');
    
    useEffect(()=>{
        getData();
    },[])

    const getData=async ()=>
    {
        const response= await getOneUser('http://localhost:8000/users?email='+email);
        setX(response.data[0]);
        console.log(response.data[0]);
    }
    if(x.userVacStatus=="yes")
    {
        return(
            <Fragment>
              <Header></Header>
              <button style={{height:"30px",marginTop:"10px", width:"100px", borderRadius:"10px", fontSize:"large", backgroundColor:"aquamarine"}} onClick={()=>navigate(-1)}>Back</button>
                <div className="wrapper">
        <div key={x.id}>
      <div className="receipt-box">
        <div className="actual-receipt">
          <div className="receipt-organization-logo">
            <img alt="logo" src={logo} />
          </div>
          <h5>Calibrum Ltd</h5>
          <h6>ABC Street 123</h6>
          <h6>Karachi Sindh 75050</h6>
          <div className="phone-and-website">
            <p>
              <a style={{color:"green"}}>Vaccination Record Certificate</a>
            </p>
          </div>

          <div className="colored-row first">
            <span>Vaccination Details</span>
            <span>Vaccine Status</span>
          </div>

          <div className="data-row">
            <span className="font-weight">COVISHIELD™</span>
            <span>
              {" "}
              <div className="receipt-organization-logo">
                <img alt="ticklogo" src={ticklogo} />
              </div>
            </span>
          </div>

          <div className="colored-row">
            <span>Beneficiary Details</span>
            <span />
          </div>

          <div className="data-row border-bottom">
            <span>
              <span className="font-weight">Beneficiary Name:</span> {x.username}
            </span>
            <span>
              <span className="font-weight">Vaccine Status :</span> {x.userVacStatus} 
            </span>
          </div>

          <div className="data-row border-bottom">
            <span>
              <span className="font-weight">Age :</span> {x.age} 
            </span>
          </div>
          <div className="data-row border-bottom">
            <span>
              <span className="font-weight">Phone Number :</span> {x.phone}
            </span>
          </div>
          <div className="data-row border-bottom">
            <span className="font-weight">Address:</span>{x.address}
            <span />
          </div>

          <div className="colored-row">
            <span>Family Details</span>
            <span />
          </div>

          <div className="data-row border-bottom">
            <span>
              <span className="font-weight">Father Name:</span> {x.fathername}
            </span>
            <span>
              <span className="font-weight">Vaccine Status :</span> {x.fatherVacStatus}
            </span>
          </div>
          <div className="data-row border-bottom">
            <span>
              <span className="font-weight">Mother Name:</span> {x.mothername}
            </span>
            <span>
              <span className="font-weight">Vaccine Status :</span> {x.motherVacStatus}
            </span>
          </div>

          <div className="data-row border-bottom">
            <span>
              <span className="font-weight">Father Age:</span> {x.fatherAge}
            </span>
          </div>
          <div className="data-row border-bottom">
            <span className="font-weight">Mother PAge: {x.motherAge}</span>
            <span />
          </div>

          <div className="colored-row">
            <span>Thank You For Fully vaccinated</span>
            <span />
          </div>
        </div>
        <div className="receipt-actions-div">
          <div className="actions-right">
            <button
              className="receipt-modal-download-button"
              onClick={downloadPDF}
              disabled={!(loader === false)}
            >
              {loader ? <span>Downloading</span> : <span>Download</span>}
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>

          <Footer></Footer>
          <FooterEnd></FooterEnd>
            </Fragment>
        )
    }
    else if(x.userSlotBooked=="yes")
    {
        return(
          <div>
            <Header></Header>
            <div style={{height:"300px", padding:"100px"}}>
                <h1>Your Status is not yet Updated</h1>
            </div>
            <Footer></Footer>
            <FooterEnd></FooterEnd>
            </div>
        )
    }
    else
    {
        return(
          <div>
          <Header></Header>
            <div style={{height:"320px", padding:"70px"}}>
                <h1>You have not yet Booked the Slot</h1>
                <button onClick={()=>navigate('/slotBooking')}>Book Slot Now</button>
            </div>
            <Footer></Footer>
            <FooterEnd></FooterEnd>
            </div>
        )
    }
}