import styled, { css } from "styled-components";

import { IToggle } from "./types";

export const Container = styled.div<IToggle.Option>`
  display: flex;
  align-items: center;
  cursor: pointer;

  border: none;
  background: #fff;
  box-shadow: 0 0 6px rgba(72, 72, 72, 0.15);

  height: 40px;
  width: 160px;
  gap: 10px;
  border-radius: 10px;

  @media (max-width: 500px) {
    gap: 5px;
  }

  &::before {
    content: "";
    position: absolute;

    left: ${({ selected }) => {
      if (selected === "key") {
        return "40px";
      }

      if (selected === "name") {
        return "80px";
      }

      if (selected === "code") {
        return "120px";
      }

      return 0;
    }};

    z-index: 1;

    height: 40px;
    width: 40px;
    border-radius: 10px;
    transition: all 0.2s cubic-bezier(0.88, -0.51, 0, 0.25);

    ${({ selected }) => {
      if (selected) {
        return css`
          background: #fff;
          box-shadow: 0 0 6px rgba(72, 72, 72);
        `;
      }
    }}
  }
`;

export const Option = styled.label<IToggle.Option>`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;

  cursor: pointer;

  > input {
    visibility: hidden;
  }
`;
