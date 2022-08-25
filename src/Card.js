import React from 'react'

export default function Card({id, en, ru, lang, change}) {
  const text = lang === 'ru' ? ru: en; 
  const style = {
    backgroundColor: lang === 'ru' ? "#27ae60": "#2980b9",
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ecf0f1',
    fontSize: '30px'
  }
  return (
    <div style={style} onClick={()=>change(id)}>
        <p>{text}</p>
    </div>
  )
}
