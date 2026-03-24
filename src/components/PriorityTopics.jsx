import { useEffect, useState } from "react";
import API from "../services/api";

function PriorityTopics({ user, refresh }) {
  const [topics, setTopics] = useState([]);

  const load = () => {
    // ✅ FIX 3: Use the user prop passed in (not localStorage directly)
    if (!user) return;

    API.get(`/topics/priority/${user.id}`)
      .then(res => setTopics(res.data))
      .catch(err => console.error("Priority load error:", err));
  };

  useEffect(() => {
    load();
  }, [refresh, user]);  // ✅ FIX 3: Re-run when refresh OR user changes

  return (
    <div className="priority-container">
      <h3 className="priority-title">Priority Topics</h3>

      <table className="priority-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Topic</th>
            <th>Proficiency</th>
          </tr>
        </thead>
        <tbody>
          {topics.length === 0 ? (
            <tr>
              <td colSpan="3">No priority topics</td>
            </tr>
          ) : (
            topics.map(t => (
              <tr key={t.id}>
                <td>{t.subject?.name}</td>
                <td>{t.name}</td>
                <td>
                  <span className={`badge badge-${getProficiencyLabel(t.proficiencyLevel)}`}>
                    {getProficiencyLabel(t.proficiencyLevel)}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

function getProficiencyLabel(level) {
  if (level <= 3) return "low";
  if (level <= 6) return "medium";
  return "high";
}

export default PriorityTopics;