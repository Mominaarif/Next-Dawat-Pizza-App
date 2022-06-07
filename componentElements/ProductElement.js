import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 100px);
  display: flex;
`;

export const LeftSide = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightSide = styled.div`
  flex: 1;
`;

export const ImageContainer = styled.div`
  width: 70%;
  height: 70%;
  position: relative;
`;

export const Title = styled.h1``;

export const Price = styled.span`
  color: #d1411e;
  font-size: 24px;
  font-weight: 400;
  border-bottom: 1px solid #d1411e;
`;

export const Desc = styled.p``;

export const Choose = styled.h3``;

export const Sizes = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
`;

export const Size = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;
  & :nth-child(2) {
    width: 40px;
    height: 40px;
  }
  & :nth-child(3) {
    width: 50px;
    height: 50px;
  }
`;

export const SmallNumber = styled.span`
  position: relative;
  top: -5px;
  right: -20px;
  background-color: teal;
  font-size: 12px;
  color: white;
  padding: 0 5px;
  border-radius: 10px;
`;

export const Ingredients = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 14px;
  font-weight: 500;
`;
export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`;
export const Lable = styled.label``;
export const AddCart = styled.div`
  width: 100%;
  display: flex;
`;
export const Quantity = styled.input`
  width: 50px;
  height: 30px;
  margin-top: 3px;
`;
export const AddCartButton = styled.button`
  height: 30px;
  margin-left: 10px;
  background-color: #d1441e;
  color: white;
  border: none;
  font-weight: 500;
  cursor: pointer;
  padding: 18px 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
`;
