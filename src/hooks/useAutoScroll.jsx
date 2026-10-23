import { useEffect } from "react";

export function useAutoScroll(value, ref) {
  useEffect(() => {
    const containerElem = ref.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [ref, value]);
}