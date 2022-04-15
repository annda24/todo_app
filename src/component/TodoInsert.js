import React, { useState, useCallback } from 'react';
import { MdAdd } from "react-icons/md";
import '../styles/TodoInsert.scss';

function TodoInsert() {
  const [value, setValue]= useState('');

  const onChange = useCallback (e => {
    setValue(e.target.value);
  },[]);

  const onSubmit = useCallback (e => {
    onInsert(value);
    setValue('');
    e.preventDetault();    // submit 이벤트는 브라우저에 새로고침을 발생시킨다. 안되게 설정
  },[value]);

  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
      <input placeholder='할 일을 입력하세요' value={value} onChange={onChange} />
      <button type='submit'><MdAdd /></button>
    </form>
  )
}

export default TodoInsert