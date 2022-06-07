import styled from "styled-components";

export const Container = styled.div``;
export const List = styled.ul`
  padding: 0;
  /* display: flex; */
  /* align-items: center; */
  list-style: none;
  color: white;
`;

export const ListItem = styled.li`
  margin: 20px;
  font-weight: 500;
`;

export const SidebarContainer = styled.aside`
  margin-top: 0;
  left: 0;
  position: fixed;
  z-index: 999;
  width: 65%;
  height: 100%;
  background: #121619;
  display: grid;
  align-items: center;
  justify-content: center;
  top: 0;
  transition: 0.3s ease-in-out;
`;

export const HiddenMenuLogo = styled.div`
  margin-top: 0;
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.div`
  position: absolute;
  top: 28px;
  right: 55px;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  -webkit-text-stroke: 1px white;
`;

export const SidebarMenu = styled.div`
  max-height: 319px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;
`;
export const HideOrderBtn = styled.div`
  margin-bottom: 165px;
  width: 195px;
  height: 40px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #121619;
  font-weight: 500;
  font-size: 18px;
`;
// export const SidebarMenu = styled.div``;
// export const SidebarMenu = styled.div``;
// export const SidebarMenu = styled.div``;
// export const SidebarMenu = styled.div``;
// export const SidebarMenu = styled.div``;
