'use client'

import React, {useState} from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export default function Countdown({setIsDone}:any) {

  return (
    <>
    <CountdownCircleTimer
    isPlaying
    duration={750}
    colors={'#102D4D'}
    size={100}
    onComplete={() => {
      setIsDone(true);
    }}

  >
    {({ remainingTime }) => <text>{remainingTime}</text>}
  </CountdownCircleTimer>
    </>
  )
}