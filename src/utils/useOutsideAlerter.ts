import { useEffect } from "react";

// rewritten from https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
export const useOutsideAlerter = (
  ref: React.MutableRefObject<any>,
  onAlert: () => void,
) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onAlert();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export default useOutsideAlerter;
