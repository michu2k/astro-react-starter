import {useState} from "react";

const Example = () => {
  const [isVisible, setIsVisible] = useState(true);

  function toggleName() {
    setIsVisible(!isVisible);
  }

  return (
    <div className="mt-8 flex w-60 flex-col items-center gap-3 text-foreground">
      <button
        onClick={toggleName}
        className="bg-muted hover:bg-muted/75 rounded-md px-4 py-2 font-semibold transition-colors">
        Toggle name
      </button>

      <p className="flex items-center gap-1 text-center text-lg">
        Example
        <strong className={`w-12 transition-opacity ${isVisible ? "opacity-100" : "opacity-0"}`}>React</strong>
        component
      </p>
    </div>
  );
};

export {Example};
