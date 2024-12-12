import { BrainIcon } from "../icon/BrainIcon";
import { TwitterIcon } from "../icon/TwitterIcon";

export function Sidebar() {
  return (
    <div className="transition-all delay-1000 md:w-52 w-0 flex flex-col bg-blue-100 h-screen">
      <span className="my-3 mx-3 font-serif text-xl text-blue-900 flex justify-between font-bold">
        <BrainIcon /> Second Brain
      </span>
      <span className="my-5 mx-5 font-serif text-lg font-semibold text-gray-800">
        <TwitterIcon />
        tweet
      </span>
      <span className="my-5 mx-5 font-serif text-lg">video</span>
      <span className="my-5 mx-5 font-serif text-lg">Settings</span>
      <span className="my-5 mx-5 font-serif text-lg">Logout</span>
    </div>
  );
}
