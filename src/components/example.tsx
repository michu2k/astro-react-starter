import {useState} from "react";

const Example = () => {
  const [isVisible, setIsVisible] = useState(true);

  function toggleText() {
    setIsVisible(!isVisible);
  }

  return (
    <div className="mt-8 flex flex-col items-center gap-4 text-foreground">
      <button
        onClick={toggleText}
        className="rounded-full bg-muted px-4 py-2 font-semibold transition-colors hover:bg-muted/75">
        Toggle text
      </button>

      <p className="text-center text-base">
        An example
        <strong className={`mx-2 w-12 transition-opacity ${isVisible ? "opacity-100" : "opacity-0"}`}>React</strong>
        component
      </p>
    </div>
  );
};

export {Example};
