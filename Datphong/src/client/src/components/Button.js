import React from 'react'

const Button = ({text, textColor, bgColor, outline, hoverBg, hoverText}) => {
  return (
    <button type='button' className={`ease-in duration-300 outline rounded-sm p-2 outline-1 ${hoverBg} ${hoverText} ${textColor} ${bgColor} ${outline}`}>
        {text}
    </button>
  ) 
}

export default Button