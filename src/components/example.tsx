import {useState} from "react";

const Example = () => {
  const [isVisible, setIsVisible] = useState(true);

  function toggleText() {
    setIsVisible(!isVisible);
  }

  return (
    <div className="mt-8 flex flex-col items-center gap-3 text-foreground">
      <button
        onClick={toggleText}
        className="bg-muted hover:bg-muted/75 rounded-full px-4 py-2 font-semibold transition-colors">
        Toggle text
      </button>

      <p className="text-center text-lg">
        An example
        <strong className={`mx-2 w-12 transition-opacity ${isVisible ? "opacity-100" : "opacity-0"}`}>React</strong>
        component
      </p>
    </div>
  );
};

export {Example};
