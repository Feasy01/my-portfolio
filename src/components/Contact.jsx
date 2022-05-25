import { FacebookFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';
import React,{useState} from 'react'
import './Contact.scss'
import {sendMail} from './mailApi';
function Contact() {
  const handleSubmit = (e) =>{
    // e.preventDefault();
    const data =  `{"personalizations":[{"to":[{"email":"szymon.walczak.official@gmail.com"}],"subject":"message from protfolio"}],"from":{"email":"${mail}"},"content":[{"type":"text/plain","value":"${message}"}]}`
    sendMail(data)
  }
  const [message,setMessage]=useState('')
  const [mail,setMail]=useState('')
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src='assets/message.svg'></img>
      </div>
      <div className="right">
        <h1>Contact me</h1>
        <h4 style={{'fontWeight':300}}>szymon.walczak.official@gmail.com</h4>
        <h4 style={{'fontWeight':300}}>+48665086051/ +4407542507524</h4>
        <div><a className='social-icon' href='https://www.instagram.com/s.wlck/' target='_blank'><InstagramFilled/></a><a className='social-icon' href='https://www.linkedin.com/in/szymon-walczak-466639222/' target='_blank'><LinkedinFilled/></a><a className='social-icon' href='https://www.facebook.com/SLUonomato2007/' target='_blank'><FacebookFilled/></a></div>
      </div>

    </div>
  )
}

export default Contact