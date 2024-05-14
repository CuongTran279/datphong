import React from 'react'

const InputForm = ({text, type , dropShadow}) => {
  return (
    <div className="mt-2 flex flex-col">
      <label for="">{text}</label>
      <input type={`${type}`} className={`border outline-none p-3 mt-1 rounded-sm ${dropShadow}`}></input>
    </div>
  )
}

export default InputForm