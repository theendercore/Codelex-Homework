import { useState } from "react";
import ComponentOne from './components/ComponentOne';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App container mx-auto my-10">
      <ComponentOne />
    </div>
  );
}

export default App;
