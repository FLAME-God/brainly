import { Sidebar } from "../components/Sidebar";
import Home from "../pages/Home";

export function Layout() {
  return (
    <div className=" p-0 flex min-h-screen">
      <div className="w-full h-full">
        <Sidebar />
      </div>
      <div className="w-full flex-1">
        <Home/>
      </div>
    </div>
  );
}
