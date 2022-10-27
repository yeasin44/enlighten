import React from "react";
import { useLoaderData } from "react-router-dom";
import LeftSide from "../Shared/LeftSide/LeftSide";

const CourseTopic = () => {
  const courseTopic = useLoaderData();
  return (
    <div>
      {courseTopic?.map((topics) => (
        <LeftSide key={topics._id} topics={topics}></LeftSide>
      ))}
    </div>
  );
};

export default CourseTopic;
