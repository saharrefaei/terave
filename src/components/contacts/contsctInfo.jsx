import React from 'react';
import './contactinfo.scss'
import ContactUsImage from '../../images/contactUs.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
function ContactInfo() {
    return ( 
        <div className="ContactContainer">
            <div className='ContactUsImage'><img src={ContactUsImage }alt="contactUs" /></div>
            <div className='ContactUsInfo'>
                <div>
                         <span style={{paddingRight:'5%'}}><AlternateEmailIcon/></span>
                         <span>saharreaei199@gmail.com</span>
                </div>
                <div>
                         <span style={{paddingRight:'5%'}}><PermPhoneMsgIcon/></span>
                         <span>+4911111111</span>
                </div>
                <div>
                         <span style={{paddingRight:'5%'}}><LocationOnIcon/></span>
                         <span>germany</span>
                </div>

            </div>
        </div>
     );
}

export default ContactInfo;