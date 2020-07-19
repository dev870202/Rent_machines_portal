import React, { useContext, useState } from "react";
import Locations from "./Locations";
import { UserContext } from "./UserContext";

const Dropdown = () => {
  const [data, setData] = useContext(UserContext);
  const [visible, setvisible] = useState(false);
  console.log(data);

  return (
    <div className="dropdownWrapper">
      <h4 onClick={() => setvisible(!visible)}>Locations</h4>
      {visible ? (
        <ul>
          {data.data.locations.map((group, index) => (
            <Locations
              key={index}
              keyValue={group.dealers_id}
              name={group.name}
              branches={group.branches}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
