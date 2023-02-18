import { Codes } from "@/src/utils";
import { useKeydown, useSound } from "@/src/hooks";

import { Container } from "./styles";

export interface MajorKeyProps {
  note?: Codes | string;
  empty?: boolean;
}

export function MajorKey({ empty, note = "" }: MajorKeyProps) {
  const { typed } = useKeydown();
  const { play } = useSound();

  return (
    <Container
      empty={empty}
      onClick={() => play(note)}
      selected={typed === note}
    />
  );
}
