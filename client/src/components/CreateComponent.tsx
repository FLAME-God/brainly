import { CrossIcon } from "../icon/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";

interface ComponentProps {
  open: boolean;
  onClose: () => void;
}

export function CreateComponentModel({ open, onClose }: ComponentProps) {
  function onClick() {
    console.log("Hi there");
  }
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-500 opacity-60 fixed top-0 left-0 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4 rounded-md">
              <div
                className="flex justify-end cursor-pointer"
                onClick={onClose}
              >
                <CrossIcon />
              </div>
              <Input placeholder="Enter title" />
              <Input placeholder="Enter link" />
            </span>
            <Button
              variant="primary"
              size="lg"
              text="Submit"
              onClick={onClick}
            />
          </div>
        </div>
      )}
    </div>
  );
}