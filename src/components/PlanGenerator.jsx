import { useState } from "react";
import API from "../services/api";

function PlanGenerator({ user, onSuccess }) {
  const [days, setDays] = useState("");
  const [loading, setLoading] = useState(false);

  const generatePlan = async () => {
    if (!user) return alert("User not found, login again");
    if (!days || Number(days) < 1) return alert("Enter valid number of days");

    setLoading(true);
    try {
      const today = new Date().toISOString().split("T")[0];

      await API.post("/plan/generate", {
        userId: user.id,
        startDate: today,
        days: Number(days),
        hoursPerDay: user.dailyStudyHours,
      });

      setDays("");
      // ✅ FIX 4: Refresh everything after generating plan
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error("FULL ERROR:", err.response?.data || err);
      alert("Plan generation failed. Make sure you have topics added.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3>Generate Plan</h3>
      <input
        placeholder="Days"
        value={days}
        type="number"
        min="1"
        onChange={(e) => setDays(e.target.value)}
      />
      <button onClick={generatePlan} disabled={loading}>
        {loading ? "Generating..." : "Generate"}
      </button>
    </div>
  );
}

export default PlanGenerator;