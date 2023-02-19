import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: var(--white);
  height: 150px;
  width: 50px;
  border-radius: 5px;
  margin-bottom: 5px;
  padding-bottom: 10px;

  font-size: 20px;
  color: var(--black-opacity-80);

  background: linear-gradient(20deg, var(--white-regular), var(--white));
  border-width: 0px 3px 3px 3px;
  border-style: solid;
  border-color: var(--white) var(--white-regular);
  box-shadow: var(--shadow-key);

  ${({ selected }: { selected: boolean }) => {
    if (selected) {
      return css`
        box-shadow: var(--shadow-selected);
      `;
    } else {
      return css`
        :active {
          box-shadow: var(--shadow-selected);
        }
      `;
    }
  }};
`;
