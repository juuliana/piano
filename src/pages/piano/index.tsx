import { useKeydown } from "@/src/hooks";
import { Key, MajorKey } from "@/src/components";
import { notesStructure, sharpNotesStructure } from "@/src/utils";

import { Container, FirstContent, SecondContent } from "./styles";

export function Piano() {
  const { typed } = useKeydown();

  return (
    <Container>
      <FirstContent>
        {notesStructure.map(({ code }) => (
          <Key key={code} note={code} typed={typed} />
        ))}
      </FirstContent>

      <SecondContent>
        {sharpNotesStructure.map(({ code }) => (
          <MajorKey empty={!code} key={code} note={code} typed={typed} />
        ))}
      </SecondContent>
    </Container>
  );
}
