import React from 'react'

const countries = {
    kg: 'Kyrgyzstan',
    md: 'Madagaskar'
}

export const AgeInput = (props) => {
  return (
    <fieldset>
        <legend><h1>{countries[props.country]}</h1></legend>
        <input type="text" placeholder='Type your age...'/>
    </fieldset>
  )
}
