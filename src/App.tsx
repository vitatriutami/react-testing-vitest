import { useState } from "react";
import { loginSchema } from "./types/schema/auth.schema";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState<any>(null);

  console.log(state);

  function handleLogin() {
    // data validation

    const validation = loginSchema.safeParse({ email, password }); // safeParse = mengembalikan data error > Parse
    // console.log(validation)

    if (!validation.success) {
      setState(validation.error.flatten().fieldErrors);
    }

    // // mock data
    // const dbUser = "dora@devscale.id";
    // const dbPassword = "secret123";

    // if (dbUser === email && password === dbPassword) {
    //   // login
    // }
  }

  return (
    <div className="h-screen flex flex-col space-y-5 justify-center items-center">
      <div className="flex flex-col space-y-2">
        <input
          role="emailInput"
          onChange={(e) => setEmail(e.target.value)}
          className="border-slate-500 p-2 border-2 rounded-3xl w-48"
        />
        {state?.email ? (
          <div role="emailValidation">{state?.email[0]}</div>
        ) : null}
        <input
          role="passwordInput"
          onChange={(e) => setPassword(e.target.value)}
          className="border-slate-500 p-2 border-2 rounded-3xl w-48"
        />
        {state?.password ? (
          <div role="passwordValidation">{state?.password[0]}</div>
        ) : null}
      </div>
      <button
        role="loginBtn"
        onClick={handleLogin}
        className="bg-red-300 rounded-3xl px-3 py-2"
      >
        Login
      </button>
    </div>
  );
}
