import React from 'react'
import '../myBio/mybio.css'
import ProgressBar from '../../../components/progressbar/ProgressBar';
const MyBio = () => {
    const testData = [
        { skills: "Design", bgcolor: "cyan", completed: 70 },
        { skills: "HTML", bgcolor: "cyan", completed: 80 },
        { skills: "CSS3", bgcolor: "cyan", completed: 75 },
        { skills: "React JS", bgcolor: "cyan", completed: 60 },
    ];


    return (
        <section>
            <div className="about-container">
                <div className="about-left-img">
                    <img src="" alt="myphoto" />
                </div>
                <div className="about-right">
                    <div className="about-right-head">
                        <h1>My Bio</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    </div>
                    <div className="about-right-work-content">
                        <div className="progress-bar">
                            {testData.map((item, idx) => (
                                <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} skills={item.skills} />
                            ))}
                        </div>
                        <div className="about-btn-container">
                            <button type='button' className='hire-me'>Hire Me</button>
                            <button type='button' className='dwn-cv'>Download CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyBio