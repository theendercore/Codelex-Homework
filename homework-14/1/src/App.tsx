import { useState } from "react";
import ComponentOne from "./components/ComponentOne";
import ComponentThree from "./components/ComponentThree";
import ComponentTwo from "./components/ComponentTwo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App container mx-auto my-10">
      <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
    </div>
  );
}

export default App;
