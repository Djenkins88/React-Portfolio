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
                Mmy name is Dominque Jenkins im from a small town called Jena, Louisana. I moved to Texas about five years ago for better opportunities. I've always been into tech so i finally decided to give it a try and i like it like alot. So when i not practicing my coding I like reading learning new things, gaming, four wheelers, and the gym.
                </p>
            </div>
        </div>
    )
}
