import React from 'react'

const InputForm = ({text, type , dropShadow, value , setValue}) => {
  return (
    <div className="mt-2 flex flex-col">
      <label for="">{text}</label>
      <input type={`${type}`} className={`border outline-none p-3 mt-1 rounded-sm ${dropShadow}`} value={value} onChange={(e)=>{setValue(prev =>({...prev, [type]:e.target.value}))}}></input>
    </div>
  )
}

export default InputForm