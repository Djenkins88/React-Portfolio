import './Intro.css'
import Me from '../../../images/Me.jpg'

export default function intro() {
    return (
        <div className='i'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Dominque Jenkins</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Full Stack Web Developer</div>
                            <div className="i-title-item">M.E.R.N STACK</div>
                            <div className="i-title-item">MONGO DB</div>
                            <div className="i-title-item">EXPRESS</div>
                            <div className="i-title-item">REACT</div>
                            <div className="i-title-item">NODE.JS</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        loremdsafsafdsfsfasfsdfsdfsfsfsfsfsfsfsfsfsfsfsfsfsfsfgfgdgdgkdjk
                        gjkdjgkjdngkjndkjgherjgherngkdjfngvkjdfngkjhgkjhgjkdnvkdngakngkjahn
                        gkjadkjbndsbngkjadbgkjabgkjbdbgndmbngdbgkjabdgndnb nmdvb vbjghjkhgj
                        ahkjdgkjadhgkjadhgkjdbnkjdbkjdhbgdjkvbkjdbjdkghjdkghdkjsvndkjbnvkja
                        dhgjkahgkjdhgakh
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
            
        </div>
    )
}
