import styled from "styled-components";




export const Card = styled.div`
padding-bottom:15px;
  width: 300px; 
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 15px;
  object-fit: cover;
`;

export const Title = styled.h2`
  margin: 15px 0 10px 0;
  color: #000000;
  font-size: 18px;
  font-weight: 700;
  text-align: center; 
`;

export const InfoList = styled.ul`
  margin-top: 10px;
  background-color: #ffffff;
  border-radius: 50px;
  display: flex;
  justify-content: space-around;
  padding: 8px 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
`;

export const InfoItem = styled.li`
  font-size: 12px;
  font-weight: 500;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;

`;

export const DifficultyBlock = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const DifficultyTitle = styled.h3`
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #333;
`;

export const DifficultyList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 0;
`;

export const DifficultyItem = styled.li`
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;

  background-color: ${(props) =>
    props.active ?  "#ff5c5c" : "#fff9e6"};
  color: ${(props) => (props.active ? "white" : "#d4c59b")};

`;
