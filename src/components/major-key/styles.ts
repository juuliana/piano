import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  background: #191919;
  width: 35px;
  height: 75px;
  padding-bottom: 10px;

  font-size: 16px;
  color: #ffffff80;

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
