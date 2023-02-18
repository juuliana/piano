import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  cursor: pointer;
`;

export const FirstContent = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  width: 650px;
  height: 300px;
  border-radius: 10px;
  background: #191919;
  padding-bottom: 10px;
`;

export const SecondContent = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;

  flex-direction: row;
  gap: 35px;
  background: transparent;
  margin: 65px 72px;
`;
