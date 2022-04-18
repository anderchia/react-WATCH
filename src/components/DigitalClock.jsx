import React from 'react'
import { useState, useEffect } from 'react';
import "./DigitalClock.css"

export default function DigitalClock() {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
          const date = new Date();
          setClockState(date.toLocaleTimeString());
        }, 1000);
      }, []);


  return (
    <div className="digital-clock">
    <h2>⌚</h2>
    <h2>{clockState}</h2>
  </div>
  )
}

