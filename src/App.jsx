import { useRef } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  console.log("re-rendered");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput name="username" placeholder="Username" />
        <FormInput name="email" placeholder="Email" />
        <FormInput name="fullname" placeholder="Full Name" />
        <FormInput name="sth" placeholder="Sth else" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
