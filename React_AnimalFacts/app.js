import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const background = <img className='background' alt='ocean' src='/images/ocean.jpg'/>
let images = [];
for (const animal in animals) {
  images.push(<img onClick={displayFact} key={animal} className='animal' alt={animal} src={animals[animal].image} aria-label={animal} role='button' />);
}
const displayFact = (e) => {
  const name = e.target.alt;
  const index = Math.floor(Math.random() * animals[name].facts.length);
  const fact = animals[name].facts[index];
  document.getElementById('fact').innerHTML = fact;
};
const title = "";
const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    {background}
    <div className='animals'>
     {images}
    </div>
    <p id='fact'></p>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById('root'));