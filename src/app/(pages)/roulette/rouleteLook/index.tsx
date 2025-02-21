'use client'
import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import './index.css'

const data = [
  {
    option: 'Premio 1',
    probability: 0.5,
    style: { backgroundColor: '#2e7d32' },
  },
  {
    option: 'Premio 2',
    probability: 0.25,
    style: { backgroundColor: '#60ad5e' },
  },
  {
    option: 'Premio 3',
    probability: 0.15,
    style: { backgroundColor: '#005100' },
  },
  {
    option: 'Premio 4',
    probability: 0.1,
    style: { backgroundColor: '#60ad5e' },
  },
]
const RouletteLook = () => {
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)

  const selectPrizeWithProbability = () => {
    const randomValue = Math.random()
    let cumulativeProbability = 0

    for (let i = 0; i < data.length; i++) {
      cumulativeProbability += data[i].probability
      if (randomValue <= cumulativeProbability) {
        return i
      }
    }

    return data.length - 1
  }
  const handleSpinClick = () => {
    const newPrizeNumber = selectPrizeWithProbability()
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }

  return (
    <div
      className='flex flex-col items-center cursor-pointer'
      onClick={handleSpinClick}
    >
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        textColors={['#ffffff']}
        onStopSpinning={() => {
          setMustSpin(false)
        }}
        perpendicularText
        outerBorderColor='#005100'
        outerBorderWidth={5}
        innerBorderColor='#2e7d32'
        innerBorderWidth={5}
        radiusLineColor='#4caf50'
      />
    </div>
  )
}

export default RouletteLook
