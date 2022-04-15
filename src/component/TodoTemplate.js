import React from 'react'
import '../styles/TodoTemplate.scss'

function TodoTemplate({children}) {// 구조분해 할당
  return (
    <div className='TodoTemplate'>
      <div className='app-title'>일정관리</div>
      <div className='content'>{children}</div>
    </div>
  )
}

export default TodoTemplate