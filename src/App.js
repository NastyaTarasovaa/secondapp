import React from 'react';

import './App.css';
import './components/hero.css';
import Hero from './components/Hero';

const heroes = [
  {name: "Бэтмен", url:"https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg", text: "Род деятельности:борец с преступностью, филантроп"},
  {name:"Супермен" , url:"https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg", text:"Род деятельности:борец за справедливость" },
  {name:"Железный человек", url:"https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg", text:"Род деятельности:гений, филантроп"}
];


class App extends React.Component {
  render () {
    return (
  <div className="App">
    {
      heroes.map((hero)=>
      <Hero name={hero.name} url={hero.url} text={hero.text}></Hero>
      )
    }
    </div>
  );
}
}

export default App;
