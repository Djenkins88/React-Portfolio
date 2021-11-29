import './Contact.css'
import { Person, Mail, GitHub } from "@material-ui/icons"


export default function Contact() {
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
                    <p className="c-desc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <form>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <br></br>
                        <textarea rows="5"  placeholder="Message" name="message" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

