import { useState } from "react";
import API from "../services/api";

function PlanGenerator({ user, onSuccess }) {

  const [days, setDays] = useState("");

  const generatePlan = async () => {

    if (!user) {
      alert("Please login first");
      return;
    }

    try {

      const today = new Date().toISOString().split("T")[0];

      await API.post("/plan/generate", {
        userId: user.id,
        startDate: today,
        days: Number(days),
        hoursPerDay: user.dailyStudyHours
      });

      alert("Plan Generated");

      // ✅ FIX ERROR
      if (onSuccess) onSuccess();

    } catch (err) {
      console.error(err);
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