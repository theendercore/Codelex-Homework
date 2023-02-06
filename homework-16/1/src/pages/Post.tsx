import React from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();

  return (
    <div className="Post container mx-auto mt-56 mb-5">
      <div>Post - {id}</div>
    </div>
  );
}
