import React from 'react';

const Overview = () => {
    return (
        <section id="overview">
            <div className="profile-card">
                <div className="profile-header">
                    <img src="/profile-photo.png" alt="Profile" className="profile-photo" />
                    <div className="profile-description">
                        <h2>Jules</h2>
                        <p>Senior Software Engineer | Full-Stack Developer | AI Enthusiast</p>
                        <p>
                            I am a passionate and experienced software engineer with a strong background in building scalable and efficient web applications.
                            My expertise lies in full-stack development, with a focus on modern JavaScript frameworks like React and Node.js.
                            I am always eager to learn new technologies and apply them to solve real-world problems.
                        </p>
                    </div>
                </div>
            </div>

            <div className="contact-card">
                <h3>Contact Information</h3>
                <ul>
                    <li><strong>Email:</strong> jules.doe@example.com</li>
                    <li><strong>LinkedIn:</strong> linkedin.com/in/jules</li>
                    <li><strong>GitHub:</strong> github.com/jules</li>
                </ul>
            </div>

            <div className="skills-card">
                <h3>Skills</h3>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h4>Languages</h4>
                        <ul>
                            <li>JavaScript (ES6+)</li>
                            <li>Python</li>
                            <li>TypeScript</li>
                            <li>HTML5 & CSS3</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h4>Frameworks & Libraries</h4>
                        <ul>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Django</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h4>Databases</h4>
                        <ul>
                            <li>MongoDB</li>
                            <li>PostgreSQL</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h4>Tools & Platforms</h4>
                        <ul>
                            <li>Docker</li>
                            <li>Git & GitHub</li>
                            <li>Webpack</li>
                            <li>AWS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
