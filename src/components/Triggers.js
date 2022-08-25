import React from 'react'

export default function Triggers({change_to_ru, change_to_en}) {
  const style = {
    display: 'flex'
  };
  console.log(change_to_en)
  return (
    <div style={style}>
        <button onClick={change_to_en}>EN</button>
        <button onClick={change_to_ru}>RU</button>
    </div>
  )
}
