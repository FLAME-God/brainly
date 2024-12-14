import React, { useRef, useState } from "react";
import { CrossIcon } from "../icon/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

const contentTypes = ["image", "video", "artical", "audio"];

interface ComponentProps {
  open: boolean;
  onClose: () => void;
}

export function CreateComponentModel({ open, onClose }: ComponentProps) {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();

  const [type, setType] = useState("video");

  function handelChamge(e: React.ChangeEvent<HTMLSelectElement>) {
    setType(e.target?.value);
  }

  function onClick() {
    const title = titleRef.current?.value;
    const webLink = linkRef.current?.value;
    axios.post(
      `${BACKEND_URL}/brain/content`,
      {
        webLink,
        type,
        title,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  }
  return (
    <div>
      {open && (
        <div>
          <div className="w-screen h-screen bg-slate-500 opacity-60 fixed top-0 left-0 flex justify-center "></div>
          <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
            <div className="flex flex-col justify-center items-center">
              <span className="bg-white p-4 rounded-md fixed">
                <div
                  className="flex justify-end cursor-pointer"
                  onClick={onClose}
                >
                  <CrossIcon />
                </div>
                <Input referance={titleRef} placeholder="Enter title" />
                <Input referance={linkRef} placeholder="Enter link" />

                <div className="pt-3">
                  <label htmlFor="type">Types</label>
                  <select
                    name="type"
                    id="type"
                    value={type}
                    onChange={handelChamge}
                  >
                    {contentTypes.map((type) => {
                      return <option value={type}>{type}</option>;
                    })}
                  </select>
                </div>
                <div className="flex justify-center pt-4">
                  <Button
                    variant="primary"
                    size="lg"
                    text="Submit"
                    onClick={onClick}
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
