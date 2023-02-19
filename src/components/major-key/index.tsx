import { useSound } from "@/src/hooks";
import { Codes, IStructure, Keys } from "@/src/utils";

import { IToggle } from "../toggle/types";

import { Container } from "./styles";

export interface MajorKeyProps {
  note?: IStructure;
  key?: Keys;
  empty?: boolean;
  typed?: Codes | string;
  labelOption: IToggle.Selected;
}

export function MajorKey({ empty, note, typed, labelOption }: MajorKeyProps) {
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
