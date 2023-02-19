import { Codes } from "@/src/utils";
import { useSound } from "@/src/hooks";

import { Container } from "./styles";

export interface MajorKeyProps {
  note?: Codes | string;
  empty?: boolean;
  typed?: Codes | string;
}

export function MajorKey({ empty, note = "", typed }: MajorKeyProps) {
  const { play } = useSound();

  return (
    <Container
      empty={empty}
      onClick={() => play(note)}
      selected={typed === note}
    />
  );
}
