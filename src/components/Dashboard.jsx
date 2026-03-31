import { useState } from "react";
import SubjectForm from "./SubjectForm";
import TopicForm from "./TopicForm";
import PlanGenerator from "./PlanGenerator";
import PriorityTopics from "./PriorityTopics";
import TodayStudy from "./TodayStudy";

function Dashboard({ user }) {
  // ✅ Use a counter so every trigger is a new value (even double-trigger works)
  const [refresh, setRefresh] = useState(0);
  const triggerRefresh = () => setRefresh(prev => prev + 1);

  return (
    <div className="dashboard">
      <h1>Welcome {user.name}</h1>
      <h3>Ready to make your timetable</h3>

      <div className="grid">
        {/* ✅ FIX 2: onSuccess passed so dropdown refreshes after adding subject */}
        <SubjectForm user={user} onSuccess={triggerRefresh} />
        {/* ✅ FIX 2: refresh prop causes useEffect to re-fetch subjects */}
        <TopicForm user={user} refresh={refresh} />
        {/* ✅ FIX 4: onSuccess refreshes Today+Priority after plan generated */}
        <PlanGenerator user={user} onSuccess={triggerRefresh} />
      </div>

      {/* ✅ FIX 3: user prop now passed so PriorityTopics can fetch correctly */}
      <PriorityTopics user={user} refresh={refresh} />

      <h3 className="section-header">Today's Goal</h3>

      {/* ✅ FIX 5: onSuccess triggers priority refresh when session completed */}
      <TodayStudy user={user} refresh={refresh} onSuccess={triggerRefresh} />
    </div>
    
  );
}

export default Dashboard;