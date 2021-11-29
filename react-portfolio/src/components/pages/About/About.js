import "./About.css"
import Me2 from "../../../images/Me2.jpg"

export default function About() {
    return (
        <div className="a">
            <div className="a-left"> </div>
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Me2} alt="" className="a-img" />
                </div>
            <div className="a-right"> 
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of 
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p className="a-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.
                </p>
                
            </div>
        </div>
    )
}
