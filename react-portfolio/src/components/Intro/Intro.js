import './Intro.css'
import Me from '../../images/Me.jpg'

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
                            <div className="i-title-item">Full Stack Web Developer</div>
                            <div className="i-title-item">Full Stack Web Developer</div>
                            <div className="i-title-item">Full Stack Web Developer</div>
                            <div className="i-title-item">Full Stack Web Developer</div>
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
                <svg
                    width="75"
                    height="75"
                    viewBox="0 0 75 75"
                    fill="none"
                    stroke="black"
                    className="i-scroll"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="scroll">
                        <path>
                            id="Vector"  
                            d="M40.5 15L34.5 9L28.5 15" 
                            stroke-width="3"
                        </path>
                    </g>
                    
                </svg>    
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
            
        </div>
    )
}
