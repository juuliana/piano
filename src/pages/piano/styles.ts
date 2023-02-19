import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;
  border-radius: 10px;
  background: #191919;
  padding-bottom: 10px;
`;

export const Configuration = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  position: absolute;
  margin: 15px 15px;
  border-radius: 10px;
`;

export const FirstContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  width: 860px;
  height: 280px;
`;

export const SecondContent = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;

  flex-direction: row;
  gap: 25px;
  background: transparent;
  margin: 125px 52px;
`;
