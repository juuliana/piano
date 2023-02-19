import { Codes, structure } from "../utils";

export function useSound() {
  function play(typed: Codes | string) {
    const note = structure.find(({ code }) => code === typed);

    if (!note) return;

    const audio = new Audio(note.sound);
    audio.play();
  }

  return { play };
}
