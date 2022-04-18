import React from 'react'
import { useState, useEffect } from 'react';
import "./CountDown.css"

export default function CountDown() {
   
        const [time, setTime] = useState("");

        useEffect(() => {
            let countDownDate = new Date("July 6, 2023 12:00:00").getTime();
            let x = setInterval(() => {
              let now = new Date().getTime();
        
              let distance = countDownDate - now;
        
              let days = Math.floor(distance / (1000 * 60 * 60 * 24));
              let hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
              );
              let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
              setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
        
              if (distance < 0) {
                clearInterval(x);
                setTime("GORA SAN FERMIN!");
              }
            }, 1000);
          }, []);

  return (
    <div className='countdown'>
    <h2>📅</h2>
    <h3 className='letra'>San Fermin en...</h3>
    <h2 className='letra'>{time}</h2>
    </div>
  )
}


