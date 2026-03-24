import { useEffect, useState } from "react";
import API from "../services/api";

function PriorityTopics({ refresh }) {

  const [topics, setTopics] = useState([]);

  const load = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      console.log("No user found");
      return;
    }

    API.get(`/topics/priority/${user.id}`)
      .then(res => setTopics(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    load();
  }, [refresh]);

  return (
    <div className="priority-container">

      <h3 className="priority-title">Priority Topics</h3>

      <table className="priority-table">

        <thead>
          <tr>
            <th>Subject</th>
            <th>Topic</th>
          </tr>
        </thead>

        <tbody>
          {topics.length === 0 ? (
            <tr>
              <td colSpan="2">No priority topics</td>
            </tr>
          ) : (
            topics.map(t => (
              <tr key={t.id}>
                <td>{t.subject?.name}</td>
                <td>{t.name}</td>
              </tr>
            ))
          )}
        </tbody>

      </table>

    </div>
  );
}

export default PriorityTopics;