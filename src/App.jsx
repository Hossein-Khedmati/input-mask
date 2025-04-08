import { useState } from "react";
import Input from "./Main";

function App() {
  const [value, setValue] = useState("");
  const [hint, setHint] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <h2>Welcome!! Search your city </h2>
      <Input
        hint={hint}
        setHint={setHint}
        handleChange={handleChange}
        value={value}
        setValue={setValue}
      />
      <p>Developed By Hossein Khedmati with 🩵</p>
    </div>
  );
}

export default App;
