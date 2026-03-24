import { useEffect, useState } from "react";
import API from "../services/api";

function TodayStudy({ user,refresh}) {

  const [sessions, setSessions] = useState([]);

  const onSuccess = () => {
    console.log("Success");
  };
  
  const loadToday = async () => {
    const res = await API.get(`/sessions/user/${user.id}`);

    const today = new Date().toISOString().split("T")[0];

    let todaySessions = res.data.filter(
      s => s.studyDate === today
    );

    // incomplete first
    todaySessions.sort((a,b)=> a.completed - b.completed);

    setSessions(todaySessions);
  };

  useEffect(() => {
    loadToday();
  }, [refresh]);

  const complete = async(id)=>{
    await API.put(`/sessions/complete/${id}`);
    loadToday();
    onSuccess(); // 🔥 refresh priority table
  };

  const remove = async(id)=>{
    await API.delete(`/sessions/${id}`);
    loadToday();
  };

  return(
    <div className="today-container">

      <h3 className="today-title">
        Today's Study ({sessions.length})
      </h3>

      {sessions.length === 0 ? (
        <p className="no-data">No session today</p>
      ) : (

        sessions.map(s => (

          <div
            key={s.id}
            className={`today-card ${s.completed ? "done" : ""}`}
          >

            <div className="today-info">
              <p className="topic">{s.topic.name}</p>
              <p className="subject">{s.topic.subject.name}</p>

              <p className="hours">{s.allocatedHours} hrs</p>

              <p className="date">
                Start: {s.studyDate}
              </p>

              <p className="date">
                End: {s.completed ? s.studyDate : "--"}
              </p>
            </div>

            <div className="actions">

              {!s.completed && (
                <button onClick={()=>complete(s.id)}>
                  Complete
                </button>
              )}

              <button className="delete-btn"
                onClick={()=>remove(s.id)}>
                ❌
              </button>

            </div>

          </div>

        ))
      )}

    </div>
  );
}

export default TodayStudy;