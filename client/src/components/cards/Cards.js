import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>We are the Spiders!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.png'
              label='Gurveer Singh'
              text='Project Manager'
              paragraph='Second year Computer Science major at the time
               of this website’s creation. Software engineer interested
                in web development and project management.'
            />
            <CardItem
              src='images/img-9.png'
              label='Tuyet Nhi Ngo'
              text="Frontend Engineer"
              paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum. a very long line of text'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='https://media-exp1.licdn.com/dms/image/C5603AQG7sEnN51IRvA/profile-displayphoto-shrink_400_400/0/1598122309543?e=1615420800&v=beta&t=uDS_PuTSw5r7gtkETVwae7Itn1XOyN6FzsQzeGRHJ_M'
              label='Hang Ho'
              text='Backend Engineer'
              paragraph='Junior student in Computer Science major at San Jose State University. Software Developer | Seeking intership in summer 2021 and Full Time opportunities in the field of Computer Science from Summer 2022.'/>
            <CardItem
              src='images/img-9.png'
              label='Karan'
              text='Frontend Engineer'
              paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum. a very long line of text'    
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;