import React from "react";

export default function AddAnimalForm() {
  return (
    <form className="flex flex-col p-2">
      <span className="text-xl">Add Animal</span>
      <label className="my-2">
        <span>Name</span>
        <input type="text" name="name" id="name" className="mx-2" />
      </label>
      <label className="my-2">
        <span>Image Src</span>
        <input type="text" name="img-src" id="img-src" className="mx-2" />
      </label>
      <label className="my-2">
        <span>Species</span>
        <input type="text" className="mx-2" />
      </label>
    </form>
  );
}
