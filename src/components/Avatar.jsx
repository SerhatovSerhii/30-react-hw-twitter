import React, { useContext } from 'react'
import { TwitterContext } from '../utils/context'

const Avatar = ({ size }) => {

  const { user, changeAvatar } = useContext(TwitterContext)
  const handleMouseClick = (e) => {
    e.preventDefault();
    const newName = prompt('Enter new username');
    if (newName !== null) {
      changeAvatar(null, newName); 
    }
  };

  return (
    <img
     
      onContextMenu={handleMouseClick}
      className={`user-avatar ${size ?? ''}`}
      src={user.avatar}
      alt={user.name}
    />
  )
}

export default Avatar

// 1. Реализовать клик правой кнопки мышки по аватару так, чтобы в появляющемся промпте можно было ввести новое имя пользователя.
//  2. Реализовать следующую функциональность: при клике левой кнопки мышки на followers или following увелить на 1 соответствующее занчение, а при клике правой кнопки мышки уменьшить на 1. Не допускать отображения отрицательных значений.