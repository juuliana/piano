import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  width: 35px;
  height: 75px;
  padding-bottom: 10px;

  font-size: 16px;
  color: var(--white-opacity-80);

  background: linear-gradient(20deg, var(--gray), var(--black));
  border-width: 0px 3px 8px 3px;
  border-style: solid;
  border-color: var(--black) var(--gray);

  ${({ selected, empty }: { selected: boolean; empty?: boolean }) => {
    if (empty) {
      return css`
        visibility: hidden;
      `;
    } else if (selected) {
      return css`
        box-shadow: var(--shadow-selected-2);
      `;
    } else {
      return css`
        :active {
          box-shadow: var(--shadow-selected-2);
        }
      `;
    }
  }};
`;
