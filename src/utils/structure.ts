import { Codes, Notes, SharpNotes, Keys } from "./notes";

interface Structure {
  code: Codes;
  name: Notes | SharpNotes | string;
  key: Keys;
  sound: string;
}

export const notesStructure: Structure[] = [
  {
    code: "C",
    name: "dó",
    key: "a",
    sound: "/sounds/C.mp3",
  },
  {
    code: "D",
    name: "ré",
    key: "s",
    sound: "/sounds/D.mp3",
  },
  {
    code: "E",
    name: "mí",
    key: "d",
    sound: "/sounds/E.mp3",
  },
  {
    code: "F",
    name: "fá",
    key: "f",
    sound: "/sounds/F.mp3",
  },
  {
    code: "G",
    name: "sol",
    key: "g",
    sound: "/sounds/G.mp3",
  },
  {
    code: "A",
    name: "lá",
    key: "h",
    sound: "/sounds/A.mp3",
  },
  {
    code: "B",
    name: "sí",
    key: "j",
    sound: "/sounds/B.mp3",
  },
];

export const sharpNotesStructure: Structure[] = [
  {
    code: "C#",
    name: "dó#",
    key: "w",
    sound: "/sounds/CSharp.mp3",
  },
  {
    code: "D#",
    name: "ré#",
    key: "e",
    sound: "/sounds/DSharp.mp3",
  },
  {
    code: "F#",
    name: "fá#",
    key: "t",
    sound: "/sounds/FSharp.mp3",
  },
  {
    code: "G#",
    name: "sol#",
    key: "y",
    sound: "/sounds/GSharp.mp3",
  },
  {
    code: "A#",
    name: "lá#",
    key: "u",
    sound: "/sounds/ASharp.mp3",
  },
];

export const structure: Structure[] = [
  ...notesStructure,
  ...sharpNotesStructure,
];
