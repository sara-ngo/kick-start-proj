import React from 'react';
import './About.css';


function About() {
  return (
      <>
        <div className='about'>
            <h1>Our mission</h1>
            <div className='about__text'>
              <p>We are a group of CS undergraduate students at San Jose State
                University who made this project with the purpose of informing
                users about the various political parties in the United States
                of America. The survey we created determines the political 
                party that best suits a user’s interests by asking the user 
                questions regarding prominent political issues and finding the 
                best political party for them.</p>
            </div>
        </div>
      </>
  );
}

export default About;