import React from 'react'
import { Item, ItemList, Box } from './CategoryStyle'
import CategoryLabel from './CategoryLabel'

const CategoryItem = ({ item, id }) => {
  return (
    <Item>
      <input type="checkbox" name={item.title} id={`check${id}_${item.id}`} />
      <label htmlFor={`check${id}_${item.id}`}>
        <i aria-hidden="true"></i>
        <span>{item.title}</span>
      </label>
    </Item>
  )
}

const CategoryItemList = ({ itemList, id }) => {
  return (
    <ItemList>
      {itemList.map((item, index) => (
        <CategoryItem key={item.id} id={id} item={item}></CategoryItem>
      ))}
    </ItemList>
  )
}
const CategoryBox = ({ category }) => {
  return (
    <Box>
      <CategoryLabel category={category.title} />
      <CategoryItemList
        itemList={category.categoryItemList}
        id={category.id}
      ></CategoryItemList>
    </Box>
  )
}

const CategoryBoxList = ({ data }) => {
  return (
    <form action="">
      {data.map((category) => (
        <CategoryBox key={category.id} category={category}></CategoryBox>
      ))}
    </form>
  )
}

export default CategoryBoxList
