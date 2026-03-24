import { useState } from "react";
import API from "../services/api";

function SubjectForm({ user, onSuccess }) {
  const [name, setName] = useState("");

  if (!user) return null;

  const addSubject = async () => {
    if (!name.trim()) return alert("Enter subject name");

    try {
      await API.post(`/subjects/${user.id}`, { name });
      setName("");
      // ✅ FIX 2: Call onSuccess AFTER adding so TopicForm dropdown refreshes instantly
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error(err);
      alert("Error adding subject");
    }
  };

  return (
    <div className="card">
      <h3>Add Subject</h3>
      <input
        value={name}
        placeholder="Subject Name"
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addSubject()}
      />
      <button onClick={addSubject}>Add</button>
    </div>
  );
}

export default SubjectForm;