import {useState} from "react";

const Example = () => {
  const [isVisible, setIsVisible] = useState(true);

  function toggleText() {
    setIsVisible(!isVisible);
  }

  return (
    <div className="text-foreground mt-8 flex flex-col items-center gap-4">
      <button
        onClick={toggleText}
        className="bg-muted hover:bg-muted/75 cursor-pointer rounded-lg px-4 py-2 font-semibold transition-colors">
        Toggle text
      </button>

      <p className="text-muted-foreground text-center text-base">
        An example
        <strong className={`text-foreground mx-2 w-12 transition-opacity ${isVisible ? "opacity-100" : "opacity-0"}`}>
          React
        </strong>
        component
      </p>
    </div>
  );
};

export {Example};
