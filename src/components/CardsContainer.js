import React from 'react'
import Card from '../Card';

export default function CardsContainer({cards, change}) {
  const style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridAutoRows: '300px',
    gap: '20px',
    margin: '50px 0'
  };

  return (
    <div style={style}>
        {
            cards.map(elem => <Card key={elem.id} change={change} {...elem}/>)
        }
    </div>
  )
}
