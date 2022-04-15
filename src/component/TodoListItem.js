import React from 'react'
import classNames from 'classnames';
import { MdCheckBox, MdRemoveCircleOutline,MdCheckBoxOutlineBlank } from "react-icons/md";
import '../styles/TodoListItem.scss'

function TodoListItem({todo,onToggle,onRemove}) {
  const {id,text,checked} = todo;
  
  return (
    <div className='TodoListItem'>
      <div className={classNames('Checkbox',{checked})} onClick={() => onToggle(id)}>          {/* 기본 class="checked" 경우에 따라 checked를 추가로 사용 */}
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}   {/*checked -> true:MdCheckBox, false:MdCheckBoxOutlineBlank*/}
        <div className='text'>{text}</div>
      </div>
      <div className='remove' onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline/>
      </div>
    </div>
  )
}

export default TodoListItem