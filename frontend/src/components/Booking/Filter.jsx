import React, { memo, useMemo, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const FIlter = (props) => {
  const [show, isShow] = useState(true);
  useMemo(() => {
    props.show(isShow(!show));
  }, [props]);

  const [range, setRange] = useState();

  return (
    <>
      <div
        className="filterCard"
        style={{
          position: "absolute",
          right: "0",
          display: show ? "block" : "none",
        }}
      >
        <CloseIcon
          className="filterClose"
          onClick={() => isShow(!show)}
        ></CloseIcon>
        <div>
          <div className="d-flex  align-items-center ">
            <input type="checkbox" />
            <label htmlFor="">sort By lower to high</label>
          </div>
          <div className="d-flex  align-items-center ">
            <input type="checkbox" />
            <label htmlFor="">sort By highy to lower</label>
          </div>
          <div className="d-flex  align-items-center">
            <input type="checkbox" />
            <label htmlFor="">Greater than 300$</label>
          </div>
          <div className="d-flex  align-items-center ">
            <input type="checkbox" />
            <label htmlFor="">less than than 300$</label>
          </div>
          <div className="d-flex flex-column  align-items-center ">
            <label htmlFor="">slect coustom Range</label>
            <input
              type="range"
              max={4000}
              onChange={(e) => setRange(e.target.value)}
            />
            <span>Greater than{range}$</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(FIlter);
