import { useState } from "react";

export default function FaqCard() {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpening() {
    setIsOpen((prev) => !prev);
  }
  return (
    <button
      onClick={handleOpening}
      className="border-b border-yellowL pb-5 mb-8"
    >
      <div className="mb-2 flex items-center font-bold text-xl gap-4">
        <img
          src={isOpen ? "/minus.png" : "/plus.png"}
          className="w-6"
          alt="plus"
        />
        <p>How can I subscribe to a course?</p>
      </div>
      {isOpen ? (
        <div className="pl-20 w-4/5  text-left">
          <p className="border-l-2 pl-4 border-yellowL">
            Roof party banh mi chambray mumblecore. Four loko air plant unicorn
            copper mug. Church-key gluten-free man braid brooklyn raclette.
            Microdosing master cleanse next level fingerstache. XOXO
            asymmetrical meggings ethical.
          </p>
        </div>
      ) : (
        ""
      )}
    </button>
  );
}
