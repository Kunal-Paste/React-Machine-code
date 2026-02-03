import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/searchSlice/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex gap-10 justify-center">
      {tabs.map(function (e, id) {
        return (
          <button
            className={`${(activeTab == e ? "bg-blue-500" : "bg-emerald-500")} px-10 py-10 rounded-3xl active:scale-95`}
            key={id}
            onClick={() => {
              dispatch(setActiveTab(e));
            }}
          >
            {e}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
