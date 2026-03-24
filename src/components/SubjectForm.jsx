import { useState } from "react";
import API from "../services/api";

function SubjectForm({ user, onSuccess }) {

const [name, setName] = useState("");

if (!user) return null;


const addSubject = async () => {

 if (!name) return alert("Enter subject");

 try {
  await API.post(`/subjects/${user.id}`, { name });
  alert("Subject Added");
  setName("");
 } catch (err) {
  console.error(err);
 }

};

return(
<div className="card">

<h3>Add Subject</h3>

<input
value={name}
placeholder="Subject Name"
onChange={(e)=>setName(e.target.value)}
/>

<button onClick={addSubject}>Add</button>

</div>
);
}

export default SubjectForm;