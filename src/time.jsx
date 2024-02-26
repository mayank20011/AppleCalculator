import { useState } from "react";
function Time() {
  
  let time=new Date();
  let hour=time.getHours();
  // let minute=time.getMinutes();
  function currentminute(min)
  {
      if(min<9)
      {
        return "0"+min;
      }
      else
      {
        return min;
      }
  }
  const [minute,setminute]=useState(currentminute(time.getMinutes()));
  
  {
    setInterval(() => {
      time = new Date();
      hour = time.getHours();
      setminute(currentminute(time.getMinutes()));
    }, 60000);
  }
  return (
    <h1>
      {hour}:{minute}
    </h1>
  );
}
export default Time;
