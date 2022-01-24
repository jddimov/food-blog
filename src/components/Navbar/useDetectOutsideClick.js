import { useState, useEffect } from "react";


export const useDetectOutsideClick = (el, initialState) => {
  const [dropDownIsActive, setDropDownIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = e => {
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(e.target)) {
        setDropDownIsActive(!dropDownIsActive);
      }
    };

    // If the item is active (ie open) then listen for clicks outside
    if (dropDownIsActive) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [dropDownIsActive, el]);

  return [dropDownIsActive, setDropDownIsActive];
};
