import { useSound } from "@/src/hooks";

import { Container } from "./styles";
import { IKeyProps } from "./types";

export function Key({ note, typed, labelOption }: IKeyProps.Props) {
  const { play } = useSound();

  const label = labelOption === "hidden" ? "" : note[labelOption];

  return (
    <Container onClick={() => play(note.code)} selected={typed === note.code}>
      {label}
    </Container>
  );
}
