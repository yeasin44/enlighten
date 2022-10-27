import React from "react";
import { useLoaderData } from "react-router-dom";
import TopicsDetails from "../../TopicsDetails/TopicsDetails";

const RightSide = () => {
  const categoryTopics = useLoaderData();

  return (
    <div className="details-container mt-2 mb-5">
      {categoryTopics?.map((topics) => (
        <TopicsDetails key={topics._id} topics={topics}></TopicsDetails>
      ))}
    </div>
  );
};

export default RightSide;
