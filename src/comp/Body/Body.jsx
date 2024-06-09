import React from 'react'
import './Body.css'
import { education, projects, skills } from '../../assets/projects'

const Body = () => {
  return (
    <div className='body'>
        <div className="content">
        <div className="aboutme">
            <h2>About me</h2>
            <div className="line"></div>
            <ul>
                <li>🎓 <b>Master's Student at TIET:</b> I am currently pursuing a Master's degree at Thapar Institute of Engineering and Technology, where I am gaining advanced knowledge and practical experience in the field of technology.</li>
            <li>💻 <b>Frontend Developer:</b> I have strong skills in frontend development, with proficiency in ReactJS, CSS, and HTML. My projects showcase my ability to create responsive, user-friendly interfaces and dynamic web applications.</li>
            <li>🌐 <b>Learning MERN Stack:</b>  I am committed to becoming a full stack developer and am currently mastering the MERN stack, which includes MongoDB, Express.js, ReactJS, and Node.js. This comprehensive skill set allows me to handle both front-end and back-end development.</li>
            <li>🤝 <b>Team Player:</b> I excel in collaborative environments and enjoy working as part of a team. My ability to communicate effectively and work harmoniously with others ensures successful project outcomes and a positive team dynamic.</li>
            <li>📅 <b>Organizational Skills:</b> Throughout my bachelor's degree, I organized multiple university competitions and fests. These experiences have honed my project management skills, allowing me to plan, coordinate, and execute events efficiently while managing resources and meeting deadlines.</li>
            <li>🧩 <b>Strong DSA and Problem-Solving Skills:</b> I have a solid foundation in Data Structures and Algorithms (DSA) and excel in problem-solving. I enjoy tackling complex challenges and developing efficient solutions, which is essential for writing optimized and scalable code.</li>
            <li>🌟 <b>Seeking Opportunities:</b>  I am actively looking for exciting opportunities to start my career in the tech industry. I am eager to apply my technical skills, continue learning, and contribute to innovative projects that make a difference.</li>

            </ul>
            <p>
            <b>Let's connect </b> if you're looking for a dedicated developer with a passion for learning and teamwork! </p>
            </div>
        
        <div className="projects">
          <div className="title">
          <h2>👷Projects</h2>
          <div className="line"></div>
          </div>
          {projects.map((data, index)=>{
            return(
              <>
              <div className="project">
              <h3>👨‍💻{data.name}</h3>
              <p>{data.decription}</p>
              <ul className='list'>
                <li>{data.skills}</li>
              </ul>
              <div className="visit">
              <button style={data.demolink==""?{display:'none'}:{display:'block'}}><a href={data.demolink}></a>Live Demo</button>
                <button style={data.codelink==""?{display:'none'}:{display:'block'}}><a href={data.codelink}></a>View Code</button>
                <button style={data.bloglink==""?{display:'none'}:{display:'block'}}><a href={data.bloglink}></a>View Blog post</button>

              </div>
              </div>
              </>
            )
          })}

        </div>
        <div className="skills">
        <div className="title">
          <h2>🏅Skills</h2>
          <div className="line"></div>
          </div>

          <div className="skill-list">

          
        {skills.map((data, index)=>{
            return(
              <div className="skill">
                <button>{data}</button>
              </div>
            )
          })}
          </div>
        </div>
        <div className="education">
        <div className="title">
          <h2>👨‍🎓Education</h2>
          <div className="line"></div>
          </div>
          {
            education.map((data, index)=>{
              return(
                <div className="edu">
                  <ul>
                    <li><h3>{data.college}</h3>
                  <p>🎓{data.degree}</p>
                  <ul className='list'>
                    <li>{data.time}</li>
                  </ul></li>
                  </ul>
                </div>
              )
            })
          }
          
        </div>
        <div className="interests">
          
        </div>
        </div>
    </div>
  )
}

export default Body