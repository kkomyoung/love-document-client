import React from 'react'
import { ButtonArea, RoundButton } from '../buttons/Buttons'

function MultipleChoice({ type, examples }) {
  return (
    <ButtonArea full>
      {examples.map((example) => (
        <RoundButton key={example.id} color="white" text={example.text} />
      ))}
    </ButtonArea>
  )
}

export default MultipleChoice
