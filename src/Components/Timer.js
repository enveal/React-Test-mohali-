import React,{useEffect, useState} from 'react'
import { Header } from 'semantic-ui-react'


const Timer = () => {
    // initialize timeLeft with the seconds prop
    const timer =Math.floor(Math.random() * 31) + 30; 
    const [timeLeft, setTimeLeft] = useState(timer);
  
    useEffect(() => {
      if (!timeLeft) return;
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }, [timeLeft]);
  
    return (
      <div>
       <Header as='h4'>Time Left : {timeLeft} Seconds</Header>
      </div>
    );
  };

  export default Timer