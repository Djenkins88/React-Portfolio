import "./Works.css"

import img1 from '../../../images/img1.png'
import img2 from '../../../images/img2.png'
import img3 from '../../../images/img3.png'
import img4 from '../../../images/img4.png'
import img5 from '../../../images/img5.png'
import img6 from '../../../images/img6.png'



export default function Works() {
    return (
        <>
            <h1>Projects</h1>
                <div className="Card-Group">

                <div className="card-container">
                    <div className="image-container">
                        <img src={img1} />
                    </div>
                    <div className="card-content">
                        <div className="card-title">
                            <h5>Online/Offline Budget Tracker</h5>
                        </div>
                        <div className="card-text">
                            <p>Online/Offline Budget Tracker is a buget tracker that can track your actions online or offline .</p>
                        </div>
                        <div className="card-body">
                            <a href="https://github.com/Djenkins88/Online-Offline-Budget-Tracker">GitHub Link</a>
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <div className="image-container">
                        <img src={img2} />
                    </div>
                    <div className="card-content">
                        <div className="card-title">
                            <h5>Workout Tracker</h5>
                        </div>
                        <div className="card-text">
                            <p>Workout Tracker is an app designed to track the progression of the users workouts.</p>
                        </div>
                        <div className="card-body">
                            <a href="https://github.com/Djenkins88/Personal-Workout-Tracker">GitHub Link</a>
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <div className="image-container">
                        <img src={img3} />
                    </div>
                    <div className="card-content">
                        <div className="card-title">
                            <h5>Note Taker</h5>
                        </div>
                        <div className="card-text">
                            <p>Note Taker is a simple app that lets the user makes notes.</p>
                        </div>
                        <div className="card-body">
                            <a href="https://github.com/Djenkins88/Project-Note-Taker">GitHub Link</a>
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <div className="image-container">
                        <img src={img4} />
                    </div>
                    <div className="card-content">
                        <div className="card-title">
                            <h5>Tech Blog</h5>
                        </div>
                        <div className="card-text">
                            <p>Tech Blog is an app that allows the user to create update and delete blog post.</p>
                        </div>
                        <div className="card-body">
                            <a href="https://github.com/Djenkins88/Tech-Blog">GitHub Link</a>
                        </div>
                    </div>
                </div> 

                <div className="card-container">
                    <div className="image-container">
                        <img src={img5} />
                    </div>
                    <div className="card-content">
                        <div className="card-title">
                            <h5>Weather Forecast</h5>
                        </div>
                        <div className="card-text">
                            <p>Weather Forecast is a 7 day weather forecast where the users can search for a location and get the weather for that location.</p>
                        </div>
                        <div className="card-body">
                            <a href="https://github.com/Djenkins88/Weather-Forecast">GitHub Link</a>
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <div className="image-container">
                        <img src={img6} />
                    </div>
                    <div className="card-content">
                        <div className="card-title">
                            <h5>Work Day Schedular</h5>
                        </div>
                        <div className="card-text">
                            <p>Work Day Schedular is an application where the user can add notes to the schedular to reminders.</p>
                        </div>
                        <div className="card-body">
                            <a href="https://github.com/Djenkins88/Work-Day-Scheduler">Github Link</a>
                        </div>
                    </div>
                </div> 
            </div>
            </> 


            
        
    )
}


