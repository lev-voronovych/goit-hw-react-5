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
        <InfoItem>{time}</InfoItem>
        <InfoItem>{servings} servings</InfoItem>
        <InfoItem>{calories} calories</InfoItem>
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
