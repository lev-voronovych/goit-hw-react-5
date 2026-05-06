import { MenuItem } from "../MenuItem/MenuItem"
import { List } from "./MenuList.styled.jsx"

export const MenuList = ({ data }) => {
  return (
    <List>
      {data.map((item) => (
        <MenuItem
          key={item.id}
          title={item.title}
          image={item.image}
          time={item.time}
          servings={item.servings}
          calories={item.calories}
          difficulty={item.difficulty}
        />
      ))}
    </List>
  )
}
