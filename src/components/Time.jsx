import dayjs from 'dayjs'
import './Time.css'
function Time({sender}){
  const time = dayjs().format("h:mma");
  return (
    <p 
    className={sender==='robot'?"time left":"time right"}>
      {time}
    </p>
  )
}
export default Time;
