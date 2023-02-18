import { Codes } from "@/src/utils";
import { useKeydown, useSound } from "@/src/hooks";

import { Container } from "./styles";

export namespace KeyProps {
  export interface Props {
    note: Codes;
  }
}

export function Key({ note }: KeyProps.Props) {
  const { typed } = useKeydown();
  const { play } = useSound();

  return <Container onClick={() => play(note)} selected={typed === note} />;
}
