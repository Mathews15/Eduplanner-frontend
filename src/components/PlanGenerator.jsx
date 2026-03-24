import { useState } from "react";
import API from "../services/api";

function PlanGenerator({ user, onSuccess }) {

  const [days, setDays] = useState("");

  const generatePlan = async () => {

    if (!user) {
      alert("User not found, login again");
      return;
    }
  
    try {
  
      const today = new Date().toISOString().split("T")[0];
  
      const res = await API.post("/plan/generate", {
        userId: user.id,
        startDate: today,
        days: Number(days),
        hoursPerDay: user.dailyStudyHours
      });
  
      console.log("PLAN RESPONSE:", res.data);
  
      alert("Plan Generated");
  
      if (onSuccess) onSuccess();
  
    } catch (err) {
      console.error("FULL ERROR:", err.response?.data || err);
      alert("Plan generation failed");
    }
  };

  return (
    <div className="card">

      <h3>Generate Plan</h3>

      <input
        placeholder="Days"
        onChange={(e) => setDays(e.target.value)}
      />

      <button onClick={generatePlan}>
        Generate
      </button>

    </div>
  );
}

export default PlanGenerator;