import React from 'react'
import { useState } from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const AboutCompany = () => {

    const [mobileNumberDisplay, setMobileNumberDisplay] = useState(true);
    const [mobileUpdateicon, setMobileUpdateicon] = useState(true);
    const [fixedNumberDisplay, setfixedNumberDisplay] = useState(true);
    const [fixedUpdateicon, setfixedUpdateicon] = useState(true);
    const [emailDisplay, setemailDisplay] = useState(true);
    const [emailUpdateicon, setemailUpdateicon] = useState(true);
    const [addressDisplay, setaddressDisplay] = useState(true);
    const [addressUpdateicon, setaddressUpdateicon] = useState(true);

    const [mobileNumber, setmobileNumber] = useState("");
    const [fixedNumber, setfixedNumber] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");

    return (
        <div className='AM-main-div'>
            <div className='contact-infromation-div'>
                <h2 className='contact-information-style'>Company Contact Information</h2>
                <br></br>
                <div className='mobilephone-div'>
                    <p className='innerDetails'> <b>Company Name </b>:  </p>
                    <p className='innerDetails'> Janatha Constructions Suppliers</p>
                </div>

                <div className='mobilephone-div'>
                <p className='innerDetails'> <b>Mobile Phone </b>:  </p>
                
                {mobileNumberDisplay ? (<p className='innerDetails'>0765768600</p>) : (<TextField
          id="standard-helperText"
          name='mobileNumber'
          label="Helper text"
          value={mobileNumber}
          helperText="Some important text"
          variant="standard"
          onChange={(event)=>{setmobileNumber(event.target.value)}}
        />)}
        {mobileUpdateicon ?( <button onClick={()=>{setMobileNumberDisplay(false);setMobileUpdateicon(false);}}><BorderColorIcon></BorderColorIcon></button>) 
        : ( <button onClick={()=>{
            setMobileNumberDisplay(true);
            setMobileUpdateicon(true);
            }}><SaveIcon></SaveIcon></button>)}
        
                
            </div>
            <div className='mobilephone-div'>
                <p className='innerDetails'> <b>Fixed Phone </b>:  </p>
                
                {fixedNumberDisplay ? (<p className='innerDetails'>0112415063</p>) : (<TextField
          id="standard-helperText"
          label="Helper text"
          name='fixedNumber'
          value={fixedNumber}
          helperText="Some important text"
          variant="standard"
          onChange={(event)=>{setfixedNumber(event.target.value)}}
        />)}
        {fixedUpdateicon ?( <button onClick={()=>{setfixedNumberDisplay(false);setfixedUpdateicon(false);}}><BorderColorIcon></BorderColorIcon></button>) 
        : ( <button onClick={()=>{setfixedNumberDisplay(true);setfixedUpdateicon(true);}}><SaveIcon></SaveIcon></button>)}
            </div>



            <div className='mobilephone-div'>
                <p className='innerDetails'> <b> Email </b>:  </p>
                {emailDisplay ? (<p className='innerDetails'>suwasanaliyanage@gmail.com</p>) : (<TextField
          id="standard-helperText"
          label="Helper text"
          name='email'
          value={email}
          helperText="Some important text"
          variant="standard"
          onChange={(event)=>{setemail(event.target.value)}}
        />)}
        {emailUpdateicon ?( <button onClick={()=>{setemailDisplay(false);setemailUpdateicon(false);}}><BorderColorIcon></BorderColorIcon></button>) 
        : ( <button onClick={()=>{setemailDisplay(true);setemailUpdateicon(true);}}><SaveIcon></SaveIcon></button>)}
            </div>


            <div className='mobilephone-div'>
                <p className='innerDetails'> <b> Address </b>:  </p>
                {addressDisplay ? (<p className='innerDetails'>282/1/G, Ashokarama Road , Ihala Bomiriya, Kaduwela</p>) : (<TextField
          id="standard-helperText"
          label="Helper text"
          name='address'
          value={address}
          helperText="Some important text"
          variant="standard"
          onChange={(event)=>{setaddress(event.target.value)}}
        />)}
        {addressUpdateicon ?( <button onClick={()=>{setaddressDisplay(false);setaddressUpdateicon(false);}}><BorderColorIcon></BorderColorIcon></button>) 
        : ( <button onClick={()=>{setaddressDisplay(true);setaddressUpdateicon(true);}}><SaveIcon></SaveIcon></button>)}
                
            
  


        </div>
    
    
            </div>
        <br></br>
            <div className='product-details-div'>
                <div className='product-categories-div'>
                <h2 className='contact-information-style'>Product categories</h2>
                <ul>
                    <li>Building</li>
                    <li>Plumbing</li>
                    <li>Wood</li>
                    <li>Tile and Bathroom Equipments</li>
                    
                    </ul> 
                </div>
                <div className='product-categories-div'>
                <h2 className='contact-information-style'>Product Brands</h2>
                <ul>
                    <li>Sanstha</li>
                    <li>Melva</li>
                    <li>Dulux</li>
                    <li>Rossell</li>
                    <li>SLONE</li>

                    </ul> 
                </div>
                    
                
            </div>
    
    
    
    
    
    
        </div>
      )
}

export default AboutCompany