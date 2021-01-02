import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>ABOUT US</h1>
      <h3>We are the Spiders!</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.png'
              label='Gurveer Singh'
              text='Role: Team Leader'
              path='/about-us'
            />
            <CardItem
              src='images/img-9.png'
              label='Tuyet Ngo'
              text="Role: Front-end"
              path='/about-us'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='images/img-9.png'
              label='Hang Ho'
              text='Role: Back-end'
              path='/about-us'
            />
            <CardItem
            src='images/img-9.png'
            label='Karan'
            text='Role: Content'
            path='/about-us'
          />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
