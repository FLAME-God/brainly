import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Signup() {
  function onClick (){
    console.log("signup");
  }
  return <div className="h-screen w-screen bg-slate-400 flex justify-center flex-col items-center">
    <span className="bg-slate-100 flex justify-center flex-col text-center w-72 h-72 rounded-md">
      <span className="flex justify-center items-center text-xl font-bold font-serif text-blue-900">Signup to Second Brain</span>
    <div className="flex my-4 flex-col">
    <Input placeholder="Enter Username"/>
    <Input placeholder="Enter email"/>
    <Input placeholder="Enter password"/>
    </div>
    <div className="flex justify-center items-center my-2">
    <Button text="Signup" variant="primary" size="lg" onClick={onClick}/>
    </div>
    </span>
  </div>;
}
