import { Codes, structure } from "../utils";

export function useSound() {
  function play(typed: Codes | string) {
    const note = structure.filter(({ code }) => code === typed)[0];

    if (note) {
      const audio = new Audio(note.sound);
      audio.play();
    }
  }

  return { play };
}
