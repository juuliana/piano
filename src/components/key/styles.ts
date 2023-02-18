import styled, { css } from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  height: 220px;
  width: 80px;
  border-radius: 5px;
  margin-bottom: 5px;

  ${({ selected }: { selected: boolean }) => {
    if (selected) {
      return css`
        box-shadow: inset 5px 10px 10px #19191990;
      `;
    } else {
      return css`
        :active {
          box-shadow: inset 5px 10px 10px #19191990;
        }
      `;
    }
  }};
`;
