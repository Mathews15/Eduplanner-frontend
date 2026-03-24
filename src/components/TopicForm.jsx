import { useState, useEffect } from "react";
import API from "../services/api.js";

export default function TopicForm({ user, refresh }) {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [proficiency, setProficiency] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");

  // ✅ FIX 2: Re-fetch subjects whenever refresh changes (triggered after adding subject)
  useEffect(() => {
    if (!user) return;
    API.get(`/subjects/user/${user.id}`)
      .then(res => setSubjects(res.data))
      .catch(err => console.error("Load subjects error:", err));
  }, [user.id, refresh]);

  const addTopic = async () => {
    if (!name || !difficulty || !proficiency || !selectedSubject) {
      return alert("Fill all fields");
    }

    const diffNum = Number(difficulty);
    const profNum = Number(proficiency);

    if (diffNum < 1 || diffNum > 10 || profNum < 1 || profNum > 10) {
      return alert("Difficulty and Proficiency must be between 1 and 10");
    }

    try {
      await API.post("/topics", {
        name,
        difficultyLevel: diffNum,
        proficiencyLevel: profNum,
        subject: { id: Number(selectedSubject) },
      });

      setName("");
      setDifficulty("");
      setProficiency("");
      setSelectedSubject("");
    } catch (err) {
      console.error(err);
      alert("Error adding topic");
    }
  };

  return (
    <div className="card">
      <h3>Add Topic</h3>

      <select
        value={selectedSubject}
        onChange={(e) => setSelectedSubject(e.target.value)}
      >
        <option value="">Select Subject</option>
        {subjects.map(s => (
          <option key={s.id} value={s.id}>
            {s.name}
          </option>
        ))}
      </select>

      <input
        placeholder="Topic"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Difficulty (1-10)"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        type="number"
        min="1"
        max="10"
      />

      <input
        placeholder="Proficiency (1-10)"
        value={proficiency}
        onChange={(e) => setProficiency(e.target.value)}
        type="number"
        min="1"
        max="10"
      />

      <button onClick={addTopic}>Add Topic</button>
    </div>
  );
}