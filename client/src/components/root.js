import React from "react";
import { useBranch } from "../hooks";
import { Loader, Editor, BranchList } from ".";

const Root = (props) => {
  const branch = useBranch();
  if (!branch) return <div id="editor"><Loader /></div>;

  return(
    <div id="rooty" className="row" >
      <div className="col-2">
        <BranchList branches={branch.parents} />
      </div>
      <div className="col-8" style={{padding: "0px 30px"}} >
        <Editor {...branch} />
      </div>
      <div className="col-2">
        <BranchList branches={branch.children} children={true} />
      </div>
    </div>
  )
}

export default Root;
