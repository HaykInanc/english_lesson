import React from 'react'


export default function AddForm({add}) {

  const style = {
    display: 'flex'
  }

  const submit = event =>{
    event.preventDefault();
    const {en, ru} = event.target;
    add(en.value, ru.value);
    en.value = '';
    ru.value = '';
  }

  return (
    <form style={style} onSubmit={submit}>
        <input placeholder='русский' type="text" name='ru'/>
        <input placeholder='английский' type="text" name='en'/>
        <button>Добавить!</button>
    </form>
  )
}
