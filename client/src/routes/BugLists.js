import React from "react";
import BugListContainer from "../components/BugListContainer";
import SideBar from "../components/SideBar";

function BugLists() {
  return (
    <div className="min-h-screen">
      <div className="flex">
        <SideBar />
        <BugListContainer />
      </div>
    </div>
  );
}

export default BugLists;
