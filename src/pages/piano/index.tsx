import { notesStructure, sharpNotesStructure } from "@/src/utils";
import { Key, MajorKey } from "@/src/components";

import { Container, FirstContent, SecondContent } from "./styles";

export function Piano() {
  return (
    <Container>
      <FirstContent>
        {notesStructure.map(({ code }) => (
          <Key key={code} note={code} />
        ))}
      </FirstContent>

      <SecondContent>
        <MajorKey note="C#" />
        <MajorKey note="D#" />
        <MajorKey empty />
        <MajorKey note="F#" />
        <MajorKey note="G#" />
        <MajorKey note="A#" />
      </SecondContent>
    </Container>
  );
}
