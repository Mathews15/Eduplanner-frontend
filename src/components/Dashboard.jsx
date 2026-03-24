import { useState } from "react";

import SubjectForm from "./SubjectForm";
import TopicForm from "./TopicForm";
import PlanGenerator from "./PlanGenerator";
import PriorityTopics from "./PriorityTopics";
import TodayStudy from "./TodayStudy";

function Dashboard({ user }) {

const [refresh, setRefresh] = useState(false);

const triggerRefresh = () => {
    setRefresh(prev => !prev);
  };

return(
<div className="dashboard">

<h1>Welcome {user.name}</h1>
<h3>Ready to make your timetable</h3>

<div className="grid">
  <SubjectForm user={user} onSuccess={triggerRefresh}/>
  <TopicForm user={user} refresh={refresh}/>
  <PlanGenerator user={user} onSuccess={() => setRefresh(!refresh)}/>
</div>

<PriorityTopics user={user} refresh={refresh}/>


<h3>Today's Goal</h3>

<TodayStudy user={user} refresh={refresh} onSuccess={triggerRefresh}/>

</div>
);
}

export default Dashboard;