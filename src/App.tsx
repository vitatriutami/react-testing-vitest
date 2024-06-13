import { useState } from "react";
import { loginSchema } from "./types/schema/auth.schema";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState<any>(null)


  console.log(state)

  function handleLogin() {
    // data validation

    const validation = loginSchema.safeParse({ email, password }); // safeParse = mengembalikan data error > Parse
    // console.log(validation)

    if(!validation.success) {
      setState(validation.error.flatten().fieldErrors)
    }

    // // mock data
    // const dbUser = "dora@devscale.id";
    // const dbPassword = "secret123";

    // if (dbUser === email && password === dbPassword) {
    //   // login
    // }
  }

  return (
    <div>
      <input onChange={(e) => setEmail(e.target.value)} />
      {state?.email ? (
        <div role="emailValidation">{state?.email[0]}</div>
      ) : null}
      <input onChange={(e) => setPassword(e.target.value)} />
      {state?.password ? (
        <div role="passwordValidation">{state?.password[0]}</div>
      ) : null}
      <button role="loginBtn" onClick={handleLogin}>Login</button>
    </div>
  );
}
