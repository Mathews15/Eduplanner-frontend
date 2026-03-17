import { useState } from "react";
import API from "../services/api";

function PlanGenerator({ user, onSuccess }) {

const [days,setDays] = useState("");

const generatePlan = async ()=>{

 try {

  const today = new Date().toLocaleDateString('en-CA');

  await API.post("/plan/generate",{
    userId:user.id,
    startDate: today,
    days,
    hoursPerDay:user.dailyStudyHours
  });

  alert("Plan Generated");

  onSuccess();

 } catch(err){
  console.error(err);
 }

};

return(
<div className="card">

<h3>Generate Plan</h3>

<input placeholder="Days"
onChange={(e)=>setDays(e.target.value)}
/>

<button onClick={generatePlan}>
Generate
</button>

</div>
);
}

export default PlanGenerator;