import { useEffect, useState } from "react";

import { Codes, structure } from "../utils";
import { useSound } from "./use-sound";

export function useKeydown() {
  const [typed, setTyped] = useState<Codes | string>("a");

  const { play } = useSound();

  useEffect(() => {
    if (document)
      document.body.addEventListener("keydown", eventFunction, false);
  }, []);

  function eventFunction(event: KeyboardEvent) {
    const word = event.key;

    const transformed = structure.filter(({ key }) => key === word)[0];

    if (transformed) {
      setTyped(transformed.code);
      play(transformed.code);

      setTimeout(() => {
        setTyped("");
      }, 300);
    }
  }

  return { typed };
}
