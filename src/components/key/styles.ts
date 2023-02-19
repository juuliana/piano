import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: #ffffff;
  height: 150px;
  width: 50px;
  border-radius: 5px;
  margin-bottom: 5px;
  padding-bottom: 10px;

  font-size: 20px;
  color: #19191980;

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
