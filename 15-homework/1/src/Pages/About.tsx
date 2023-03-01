import React from "react";

export default function About() {
  return (
    <div className="container mx-auto my-5">
      <h2 className="my-10 text-center text-6xl">About us</h2>

      <h3 className="my-5 text-2xl">Meet the team:</h3>
      <ul className="list-disc pl-5">
        <li className="text-md">{"Me :)"}</li>
        <li className="text-md">{"Me -> -v-"}</li>
        <li className="text-md">me</li>
        <li className="text-md">and lastly ME</li>
      </ul>
    </div>
  );
}
