import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signin() {
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  async function onClick() {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const response = await axios.post(`${BACKEND_URL}/user/signin`, {
      email,
      password,
    });

    const jwt = response.data.token;
    localStorage.setItem("token", jwt);
    navigate("/");
  }
  return (
    <div className="h-screen w-screen bg-slate-400 flex justify-center flex-col items-center">
      <span className="bg-slate-100 flex justify-center flex-col text-center w-72 h-72 rounded-md">
        <span className="flex justify-center items-center text-xl font-bold font-serif text-blue-900">
          login to Second Brain
        </span>
        <div className="flex my-4 flex-col">
          <Input referance={emailRef} placeholder="Enter email" />
          <Input referance={passwordRef} placeholder="Enter password" />
        </div>
        <div className="flex justify-center items-center my-2">
          <Button text="Signin" variant="primary" size="lg" onClick={onClick} />
        </div>
      </span>
    </div>
  );
}
