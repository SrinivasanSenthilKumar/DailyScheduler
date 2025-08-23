import React, {useState} from 'react'
import { Input } from './input'
import { Button } from './button'

interface Props{
    onAdd:(activity:string, hours:number) => void
}
const TimeForm = ({onAdd}:Props) => {
  const[activity, setActivity] = useState("");
  const[hours, setHours] = useState("");
  
  const handlesubmit = () => {

     if(!activity.trim() || !hours ) alert("Please Fill it");
     onAdd(activity,Number(hours));
     setActivity("");
     setHours("");
  } 


  return (
    <div className='space-y-3'>


        <Input placeholder='Activity(e.g Sleep)'
        value={activity}
        onChange={(e) => setActivity(e.target.value)}/>
        <Input type='number' placeholder='Hours (e.g 8)'
        value={hours}
        onChange={(e) => setHours(e.target.value)}/>
        <Button className='w-full' onClick={handlesubmit}>Add Activity</Button>
    </div>
  )
}
export default TimeForm