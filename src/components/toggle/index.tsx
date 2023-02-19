import { useState } from "react";
import { MdKeyboardHide } from "react-icons/md";
import { GiMusicalScore } from "react-icons/gi";
import { FaEyeSlash, FaMusic } from "react-icons/fa";

import { IToggle } from "./types";
import { Container, Option } from "./styles";

export function Toggle({ onSelect }: IToggle.Props) {
  const [selected, setSelected] = useState<IToggle.Selected>("hidden");

  function change(value: IToggle.Selected) {
    setSelected(value);
    onSelect(value);
  }

  return (
    <Container selected={selected}>
      <Option>
        <input
          type="radio"
          value="hidden"
          defaultChecked={selected === "hidden"}
          onClick={() => change("hidden")}
        />
        <FaEyeSlash />
      </Option>

      <Option>
        <input
          type="radio"
          value="key"
          defaultChecked={selected === "key"}
          onClick={() => change("key")}
        />
        <MdKeyboardHide style={{ marginLeft: 2.5 }} />
      </Option>

      <Option>
        <input
          type="radio"
          value="name"
          defaultChecked={selected === "name"}
          onClick={() => change("name")}
        />
        <FaMusic />
      </Option>

      <Option>
        <input
          type="radio"
          value="code"
          defaultChecked={selected === "code"}
          onClick={() => change("code")}
        />
        <GiMusicalScore />
      </Option>
    </Container>
  );
}
