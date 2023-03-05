import React from 'react'
import { Item, ItemList, Box } from './CategoryStyle'

const CategoryItem = ({ items, index, category }) => {
  return (
    <Item>
      <input
        type="checkbox"
        name={category.title}
        id={'check' + category.id + '_' + index}
      />
      <label htmlFor={'check' + category.id + '_' + index}>
        <i aria-hidden="true"></i>
        <span>{items}</span>
      </label>
    </Item>
  )
}

const CategoryItemList = ({ category }) => {
  return (
    <ItemList>
      {category.items.map((item, index) => (
        <CategoryItem
          key={index}
          items={item}
          index={index}
          category={category}
        ></CategoryItem>
      ))}
    </ItemList>
  )
}

const CategoryBox = ({ category }) => {
  return (
    <Box>
      <strong>
        <i aria-hidden="true">👀</i>
        {category.title}
      </strong>
      <CategoryItemList category={category}></CategoryItemList>
    </Box>
  )
}

const CategoryBoxList = ({ data }) => {
  return (
    <form action="">
      {data.map((category) => (
        <CategoryBox key={category.id} category={category} />
      ))}
    </form>
  )
}

export default CategoryBoxList
