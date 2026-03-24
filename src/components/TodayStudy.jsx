import { useEffect, useState } from "react";
import API from "../services/api";

function TodayStudy({ user, refresh, onSuccess }) {
  const [sessions, setSessions] = useState([]);

  const loadToday = async () => {
    try {
      const res = await API.get(`/sessions/user/${user.id}`);
      const today = new Date().toISOString().split("T")[0];

      // ✅ FIX 5: Only show incomplete sessions for today
      const todaySessions = res.data
        .filter(s => s.studyDate === today && !s.completed)
        .sort((a, b) => a.allocatedHours - b.allocatedHours);

      setSessions(todaySessions);
    } catch (err) {
      console.error("TodayStudy load error:", err);
    }
  };

  useEffect(() => {
    loadToday();
  }, [refresh]);

  const complete = async (id) => {
    try {
      await API.put(`/sessions/complete/${id}`);
      // ✅ FIX 5: After completing, refresh both TodayStudy and PriorityTopics
      loadToday();
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error("Complete error:", err);
    }
  };

  const remove = async (id) => {
    try {
      await API.delete(`/sessions/${id}`);
      loadToday();
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="today-container">
      <h3 className="today-title">Today's Study ({sessions.length})</h3>

      {sessions.length === 0 ? (
        <p className="no-data">No sessions for today. Generate a plan to get started!</p>
      ) : (
        sessions.map(s => (
          <div key={s.id} className="today-card">
            <div className="today-info">
              <p className="topic">{s.topic?.name}</p>
              <p className="subject">{s.topic?.subject?.name}</p>
              <p className="hours">{s.allocatedHours} hrs</p>
              <p className="date">📅 {s.studyDate}</p>
            </div>

            <div className="actions">
              <button className="complete-btn" onClick={() => complete(s.id)}>
                ✓ Complete
              </button>
              <button className="delete-btn" onClick={() => remove(s.id)}>
                ✕
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TodayStudy;