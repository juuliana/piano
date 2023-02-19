import { useState } from "react";

import { IToggle } from "@/src/components/toggle/types";
import { useKeydown } from "@/src/hooks";
import { Key, MajorKey, Toggle } from "@/src/components";
import { notesStructure, sharpNotesStructure } from "@/src/utils";

import {
  Configuration,
  Container,
  FirstContent,
  SecondContent,
} from "./styles";

export function Piano() {
  const [labelOption, setLabelOption] = useState<IToggle.Selected>("hidden");

  const { typed } = useKeydown();

  return (
    <Container>
      <Configuration>
        <Toggle onSelect={setLabelOption} />
      </Configuration>

      <FirstContent>
        {notesStructure.map((note) => (
          <Key
            key={note.key}
            note={note}
            typed={typed}
            labelOption={labelOption}
          />
        ))}
      </FirstContent>

      <SecondContent>
        {sharpNotesStructure.map((note) => (
          <MajorKey
            empty={!note.code}
            key={note.key}
            note={note}
            typed={typed}
            labelOption={labelOption}
          />
        ))}
      </SecondContent>
    </Container>
  );
}
