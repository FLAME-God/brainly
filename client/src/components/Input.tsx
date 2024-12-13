interface InputType {
    //onChange: () => void;
    placeholder: string;
  }
  
  export function Input({ placeholder }: InputType) {
    return (
      <div>
        <input
          type="text"
          placeholder={placeholder}
          className="px-4 py-2 bg-gray-500 text-white mt-2"
        />
      </div>
    );
  }