import {
  Card,
  Image,
  Title,
  InfoList,
  InfoItem,
  DifficultyBlock,
  DifficultyTitle,
  DifficultyList,
  DifficultyItem,
} from "./MenuItem.styled.jsx";

import { IoIosTime } from "react-icons/io";
import { GiMeat } from "react-icons/gi";
import { RiServiceBellFill } from "react-icons/ri";

export const MenuItem = ({
  title,
  image,
  time,
  servings,
  calories,
  difficulty,
}) => {
  return (
    <Card>
      <Image src={image} alt={title} />

      <Title>{title}</Title>

      <InfoList>
        <InfoItem><IoIosTime/>{time}</InfoItem>
        <InfoItem><RiServiceBellFill/>{servings} servings</InfoItem>
        <InfoItem> <GiMeat/>{calories} calories</InfoItem>
      </InfoList>

      <DifficultyBlock>
        <DifficultyTitle>Difficulty</DifficultyTitle>
        <DifficultyList>
          <DifficultyItem active={difficulty === 1}>Easy</DifficultyItem>
          <DifficultyItem active={difficulty === 2}>Medium</DifficultyItem>
          <DifficultyItem active={difficulty === 3}>Hard</DifficultyItem>
        </DifficultyList>
      </DifficultyBlock>
    </Card>
  );
};
