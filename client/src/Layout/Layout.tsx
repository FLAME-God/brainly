import { Sidebar } from "../components/Sidebar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" p-0 flex min-h-screen">
      <div className="w-full h-full">
        <Sidebar />
      </div>
      <div className="w-full flex-1">{children}</div>
    </div>
  );
}
