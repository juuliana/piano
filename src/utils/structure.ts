import { Codes, Notes, SharpNotes, Keys } from "./notes";

export interface IStructure {
  code: Codes;
  name: Notes | SharpNotes;
  key: Keys;
  sound: string;
}

export const notesStructure: IStructure[] = [
  {
    code: "4C",
    name: "Dó",
    key: "q",
    sound: "/sounds/4C.mp3",
  },
  {
    code: "4D",
    name: "Ré",
    key: "w",
    sound: "/sounds/4D.mp3",
  },
  {
    code: "4E",
    name: "Mi",
    key: "e",
    sound: "/sounds/4E.mp3",
  },
  {
    code: "4F",
    name: "Fá",
    key: "r",
    sound: "/sounds/4F.mp3",
  },
  {
    code: "4G",
    name: "Sol",
    key: "t",
    sound: "/sounds/4G.mp3",
  },
  {
    code: "4A",
    name: "Lá",
    key: "y",
    sound: "/sounds/4A.mp3",
  },
  {
    code: "4B",
    name: "Si",
    key: "u",
    sound: "/sounds/4B.mp3",
  },
  {
    code: "5C",
    name: "Dó",
    key: "z",
    sound: "/sounds/5C.mp3",
  },
  {
    code: "5D",
    name: "Ré",
    key: "x",
    sound: "/sounds/5D.mp3",
  },
  {
    code: "5E",
    name: "Mi",
    key: "c",
    sound: "/sounds/5E.mp3",
  },
  {
    code: "5F",
    name: "Fá",
    key: "v",
    sound: "/sounds/5F.mp3",
  },
  {
    code: "5G",
    name: "Sol",
    key: "b",
    sound: "/sounds/5G.mp3",
  },
  {
    code: "5A",
    name: "Lá",
    key: "n",
    sound: "/sounds/5A.mp3",
  },
  {
    code: "5B",
    name: "Si",
    key: "m",
    sound: "/sounds/5B.mp3",
  },
];

export const sharpNotesStructure: IStructure[] = [
  {
    code: "4C#",
    name: "Dó#",
    key: "2",
    sound: "/sounds/4Db.mp3",
  },
  {
    code: "4D#",
    name: "Ré#",
    key: "3",
    sound: "/sounds/4Eb.mp3",
  },
  {} as any,
  {
    code: "4F#",
    name: "Fá#",
    key: "5",
    sound: "/sounds/4Gb.mp3",
  },
  {
    code: "4G#",
    name: "Sol#",
    key: "6",
    sound: "/sounds/4Ab.mp3",
  },
  {
    code: "4A#",
    name: "Lá#",
    key: "7",
    sound: "/sounds/4Bb.mp3",
  },
  {} as any,
  {
    code: "5C#",
    name: "Dó#",
    key: "s",
    sound: "/sounds/5Db.mp3",
  },
  {
    code: "5D#",
    name: "Ré#",
    key: "d",
    sound: "/sounds/5Eb.mp3",
  },
  {} as any,
  {
    code: "5F#",
    name: "Fá#",
    key: "g",
    sound: "/sounds/5Gb.mp3",
  },
  {
    code: "5G#",
    name: "Sol#",
    key: "h",
    sound: "/sounds/5Ab.mp3",
  },
  {
    code: "5A#",
    name: "Lá#",
    key: "j",
    sound: "/sounds/5Bb.mp3",
  },
];

export const structure: IStructure[] = [
  ...notesStructure,
  ...sharpNotesStructure,
];
