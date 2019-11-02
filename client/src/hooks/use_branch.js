import client from "../index";
import { useEffect, useState } from "react";
import { QUERY_BRANCH } from "../actions";

function useBranch() {
  const [branch, setBranch] = useState(null);

  useEffect(() => {
    const branches = window.location.pathname.split('/');
    async function fetchBranch(slug) {
      slug = slug === "" ? "root" : slug
      const { data } = await client.query({
        query: QUERY_BRANCH,
        variables: { slug }
      });
      setBranch(data.branch);
    };
    fetchBranch(branches[branches.length - 1]);
  });

  return branch;
}

export default useBranch;
