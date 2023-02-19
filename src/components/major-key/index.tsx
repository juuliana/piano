import { useSound } from "@/src/hooks";

import { IMajorKey } from "./types";
import { Container } from "./styles";

export function MajorKey({ empty, note, typed, labelOption }: IMajorKey.Props) {
  const { play } = useSound();

  const { code = "" } = note || {};
  const label = labelOption === "hidden" ? "" : note && note[labelOption];

  return (
    <Container
      empty={empty}
      onClick={() => play(code)}
      selected={typed === code}
    >
      {label}
    </Container>
  );
}
