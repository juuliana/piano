import styled, { css } from "styled-components";

export const Container = styled.div`
  background: #191919;
  width: 55px;
  height: 125px;

  ${({ selected, empty }: { selected: boolean; empty?: boolean }) => {
    if (empty) {
      return css`
        visibility: hidden;
      `;
    } else if (selected) {
      return css`
        box-shadow: inset 5px 2px 10px #ffffff;
      `;
    } else {
      return css`
        :active {
          box-shadow: inset 5px 2px 10px #ffffff;
        }
      `;
    }
  }};
`;
