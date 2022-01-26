import "./App.css";
import FormInput from "./components/FormInput";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 3,
      name: "birthday",
      type: "text",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm password",
      label: "Confirm password",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <FormInput />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
