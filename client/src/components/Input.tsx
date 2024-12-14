interface InputType {
  //onChange: () => void;
  placeholder: string;
  referance: any;
}

export function Input({ placeholder, referance }: InputType) {
  return (
    <div>
      <input
        ref={referance}
        type="text"
        placeholder={placeholder}
        className="px-4 py-2 bg-gray-500 text-white mt-2"
      />
    </div>
  );
}
