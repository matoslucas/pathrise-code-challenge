import { useContext, useState } from "react";
import { JobContext } from "../contexts/TaskContext";
import Button from "@material-ui/core/Button";

type NavbarComponentProps = {
  action: ()=>void;
};

const NavbarComponent = ({action}:NavbarComponentProps) => {
  const { state } = useContext(JobContext);
 

  return (
    <div >
      <header>
        <div className={"fairy-wand"}></div>
        <h5 className={"title"}>Whishlist</h5>

        <span>{state.jobs.length} Jobs</span>
      </header>
      <Button className={"add-button"} onClick={()=>action()}>
        +
      </Button>
    </div>
  );
};
export default NavbarComponent;
