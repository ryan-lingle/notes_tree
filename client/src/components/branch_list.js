import React from "react";

const BranchList = ({ branches, children }) => {

  const buildBranch = ({ id, name, slug, image }) => {
    const href = "/" + slug;
    return(
      <a key={id} href={href} className="branch-card">
        <div>
          {name}
        </div>
        <img src={image} />
      </a>
    );
  }

  return(
    <div className="branch-list" style={{height: `${window.innerHeight - 50}px`}} >
      {branches.map(branch => buildBranch(branch))}
    </div>
  )
}

export default BranchList;
