import { useEffect, useState } from "react";
import API from "../services/api";

function PriorityTopics({ refresh }) {

const [topics,setTopics] = useState([]);

const load = () => {
  API.get("/topics/priority")
    .then(res => setTopics(res.data));
};

useEffect(()=>{
  load();
}, [refresh]); // 🔥 THIS IS KEY

return(
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
{topics.map(t=>(
<tr key={t.id}>
<td>{t.subject.name}</td>
<td>{t.name}</td>
</tr>
))}
</tbody>

</table>

</div>
);
}

export default PriorityTopics;