import './Contact.css'
import { useState } from "react"
import { Person, Mail, GitHub } from "@material-ui/icons"
import React, { useRef } from "react";
import emailjs from "emailjs-com";



export default function Contact() {
    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault()
        console.log(e)
        emailjs
            .sendForm(
                'service_t75b9ze', 'template_0oxhbeb', e.target, 'user_4qOElY0uDoLkLCTXYy0ww')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, 
            (error) => {
                console.log(error.text);
            });
            e.target.reset()
            
    };
    

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <Person className="c-icon" />
                            +318-312-9554              
                        </div>
                        <div className="c-info-item">
                            <GitHub className="c-icon" />
                            <a href="https://github.com/Djenkins88" >Djenkins88</a>           
                        </div>
                        <div className="c-info-item">
                            <Mail className="c-icon" />
                            DominqueJenkins14@gmail.com                 
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc"> If you have any questions you can reach me here by GitHub or Email.</p>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <br></br><br></br>
                        <textarea rows="5"  placeholder="Message" name="message" />
                        <br></br>
                        <button>Submit</button>
                        {done && "Message Sent..." }
                    </form>
                </div>
            </div>
        </div>
    )
}

