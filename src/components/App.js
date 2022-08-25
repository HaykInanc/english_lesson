import AddForm from './AddForm';
import CardsContainer from './CardsContainer';
import { words } from '../data/words';
import { useState } from 'react';
import Triggers from './Triggers';

function App() {

  const [cards, setCard] = useState(words);


  const add = (en, ru) => setCard([
    ...cards,
    {
      id: Date.now(),
      en, ru,
      lang: 'en'
    }
  ]);

  const change = id => {
    setCard(cards.map(elem => {
      if (elem.id === id){
        elem.lang = (elem.lang === 'ru') ? 'en' : 'ru';
      }
      return elem
    }));
  };

  const change_to_ru = () =>{
    setCard(cards.map(elem => {
      elem.lang = 'ru';
      return elem
    }));
  }

  const change_to_en = () =>{
    setCard(cards.map(elem => {
      elem.lang = 'en';
      return elem
    }));
  }

  return (
    <div>
      <AddForm add={add}/>
      <CardsContainer cards={cards} change={change} />
      <Triggers change_to_en={change_to_en} change_to_ru={change_to_ru}/>
    </div>
  );
}

export default App;
