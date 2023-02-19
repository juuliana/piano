import { useEffect, useState } from "react";

import { Codes, structure } from "../utils";

import { useSound } from "./use-sound";

export function useKeydown() {
  const [typed, setTyped] = useState<Codes | string>("");

  const { play } = useSound();

  useEffect(() => {
    if (document) document.addEventListener("keydown", eventFunction, false);
  }, []);

  function eventFunction(event: KeyboardEvent) {
    const note = structure.find(({ key }) => key === event.key);

    if (!note) return;

    setTyped(note.code);
    play(note.code);

    setTimeout(() => setTyped(""), 300);
  }

  return { typed };
}
