import { useSound } from "@/src/hooks";
import { Codes, IStructure } from "@/src/utils";

import { IToggle } from "../toggle/types";

import { Container } from "./styles";

export namespace KeyProps {
  export interface Props {
    note: IStructure;
    typed: Codes | string;
    labelOption: IToggle.Selected;
  }
}

export function Key({ note, typed, labelOption }: KeyProps.Props) {
  const { play } = useSound();

  const label = labelOption === "hidden" ? "" : note[labelOption];

  return (
    <Container onClick={() => play(note.code)} selected={typed === note.code}>
      {label}
    </Container>
  );
}
