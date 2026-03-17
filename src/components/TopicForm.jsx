import { useState,useEffect } from "react";
import API from '../services/api.js';

export default function TopicForm({ user, refresh }) {

    const [name, setName] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [proficiency, setProficiency] = useState("");
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState("");
    
    // 🔥 LOAD SUBJECTS
    const loadSubjects = () => {
      API.get(`/subjects/user/${user.id}`)
        .then(res => setSubjects(res.data))
        .catch(err => console.error(err));
    };
    
    useEffect(() => {
      loadSubjects();
    }, [user.id, refresh]); // 🔥 THIS FIXES YOUR ISSUE
    
    const addTopic = async () => {

        if (!name || !difficulty || !proficiency || !selectedSubject) {
          alert("Fill all fields");
          return;
        }
      
        try {
          await API.post("/topics", {
            name,
            difficultyLevel: Number(difficulty),
            proficiencyLevel: Number(proficiency),
            subject: { id: Number(selectedSubject) }
          });
      
          alert("Topic Added");
      
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
    placeholder="Difficulty"
    onChange={(e) => setDifficulty(e.target.value)}
    />
    
    <input
    placeholder="Proficiency"
    onChange={(e) => setProficiency(e.target.value)}
    />
    
    <button onClick={addTopic}>
     Add Topic
    </button>
    
    </div>
    );
    }