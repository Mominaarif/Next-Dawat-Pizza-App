import styled from "styled-components";
import { ExtraL, ExtraS, Large, Medium, Small } from "./Responsive";

export const Container = styled.div`
  height: 100px;
  padding: 0px 50px;
  ${ExtraS({ padding: "0px 20px", height: "80px" })}
  ${Small({ padding: "0px 30px", height: "80px" })}
  ${Medium({ padding: "0px 50px", height: "85px" })}
  ${Large({ padding: "0px 50px", height: "100px" })}
  ${ExtraL({ padding: "0px 50px",  height: "100px" })}
  background-color: #d1411e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const ItemContainer = styled.div`
  ${ExtraS({ display: "flex" })}
  ${Small({ display: "flex" })}
  ${Medium({ display: "flex" })}
  ${Large({ display: "none" })}
  ${ExtraL({ display: "none" })}
  flex: 1;
  display: flex;
  align-items: center;

  & :nth-child(2) {
    ${ExtraS({ display: "none" })}
    ${Small({ display: "none" })}
    ${Medium({ display: "none" })}
    ${Large({ display: "flex" })}
    ${ExtraL({ display: "flex" })}
    /* ${Small({ display: "none" })}
    ${Medium({ display: "none" })}
    ${Large({ display: "none" })}
    ${ExtraL({ display: "none" })} */
  }
  & :nth-child(3) {
    /* flex: 3; */
    justify-content: center;
    ${ExtraS({ display: "flex" })}
    ${Small({ display: "flex" })}
    ${Medium({ display: "flex" })}
    ${Large({ display: "none" })}
    ${ExtraL({ display: "none" })}
  }
  & :nth-child(4) {
    flex: 3;
    justify-content: center;
    ${ExtraS({ display: "none" })}
    ${Small({ display: "none" })}
    ${Medium({ display: "none" })}
    ${Large({ display: "flex", flex: 4 })}
    ${ExtraL({ display: "flex" })}
  }
  & :nth-child(5) {
    justify-content: flex-end;
    ${Small({ display: "flex" })}
    ${Medium({ display: "flex" })}
    ${Large({ display: "flex" })}
    ${ExtraL({ display: "flex" })}
  }
`;

export const CallButton = styled.div`
  background-color: white;
  border-radius: 50%;
  ${Medium({ height: "45px" })}
  padding: 10px;
  width: 50px;
  height: 50px;
`;

export const TextContainer = styled.div``;

export const Texts = styled.div`
  margin-left: 20px;
  color: white;
`;

export const Text = styled.div`
  & :nth-child(1) {
    ${Large({ fontSize: "10px" })}
    font-size: 12px;
    font-weight: 500;
  }
  & :nth-child(2) {
    ${Large({ fontSize: "15px" })}
    font-size: 20px;
    font-weight: bold;
  }
`;

export const List = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  list-style: none;
  color: white;
`;

export const ListItem = styled.li`
  margin: 20px;
  ${Large({ fontSize: "15px" })}
  font-weight: 500;
`;

export const CartContainer = styled.div`
  position: relative;
`;

export const CartCounter = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #d1411e;
`;
