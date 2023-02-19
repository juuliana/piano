import { Codes } from "@/src/utils";
import { useSound } from "@/src/hooks";

import { Container } from "./styles";

export namespace KeyProps {
  export interface Props {
    note: Codes;
    typed: Codes | string;
  }
}

export function Key({ note, typed }: KeyProps.Props) {
  const { play } = useSound();

  return <Container onClick={() => play(note)} selected={typed === note} />;
}
