import {useState} from "react";

import NavbarComponent from "./com/NavbarComponent";
import TaskContextProvider from "./contexts/TaskContext";
import PostedJobsComponent from "./com/PostedJobsComponent";
import AddJobComponent from "./com/AddJobComponent";

const App = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
 

  return (
    <div className={'main-container'}>
      <TaskContextProvider>
        <NavbarComponent  action={()=>toggle()}></NavbarComponent>
        <PostedJobsComponent  />
        <AddJobComponent open={open} onClose={toggle} />
      </TaskContextProvider>
    </div>
  );
};

export default App;
