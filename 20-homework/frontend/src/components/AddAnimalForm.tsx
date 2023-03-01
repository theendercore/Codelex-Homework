import React from "react";

export default function AddAnimalForm() {
  return (
    <form>
      <span>Add Animal</span>
     <label>
      <span>Name</span>
      <input type="text" name="name" id="name" />
      </label> 
      <label >
        Image Src
        <input type="text" name="img-src" id="img-src" />
      </label>
      
      
    </form>
  );
}