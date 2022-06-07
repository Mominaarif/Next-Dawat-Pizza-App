import styled from "styled-components";

export const Container = styled.div`
  padding: 50px;
  display: flex;
`;

export const LeftContainer = styled.div`
  flex: 2;
`;

export const RightContainer = styled.div`
  flex: 1;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`;

export const TR = styled.tr``;

export const TH = styled.th``;

export const TD = styled.td`
  text-align: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

export const Name = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: #d1411e;
`;
export const Extras = styled.span``;

export const Price = styled.span``;

export const Quantity = styled.span``;

export const Total = styled.span`
  font-weight: 500;
  font-size: 18px;
`;

export const Wrapper = styled.div`
  width: 90%;
  max-height: 300px;
  background-color: #333;
  padding: 50px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`;

export const Title = styled.h2``;

export const TotalText = styled.div``;

export const TotalTextTitle = styled.b`
  margin-right: 10px;
`;

export const CheckoutButton = styled.button`
  height: 30px;
  color: #d1411e;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
`;
