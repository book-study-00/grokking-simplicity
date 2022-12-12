import React from 'react'

function renderInput(inputName: string) {
  return (
    <div>
      <label htmlFor={inputName}>{inputName}</label>
      <input type="text" id={inputName} />
    </div>
  )
}
