import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const Locations = ({ keyValue, name, branches }) => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useContext(UserContext);

  //console.log("====>", data);

  const handleToggle = (e) => {
    setToggle(!toggle);
  };

  return (
    <div
      onMouseEnter={(e) => handleToggle(e)}
      onMouseLeave={(e) => handleToggle(e)}
      className="hoverDiv"
    >
      <li data-id={keyValue} key={keyValue}>
        <Link
          to={{
            pathname: "/Categories",
            Cprops: { categoryList: branches },
          }}
        >
          {name}
        </Link>
      </li>
      {toggle ? (
        <ul>
          {branches.map((branch) => (
            <li key={branch.branch_id}>
              <Link
                to={{
                  pathname: "/SubCategories",
                  SCprops: {
                    subcategoryList: branch.categories,
                    id: branch.branch_id,
                  },
                }}
              >
                {branch.name}
                {/* {console.log("branch", branch)} */}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Locations;
