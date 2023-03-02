import React from 'react'
import { ItemList, Form, Box } from './CategoryStyle'

const CategoryItem = ({ items, index, category }) => {
  return (
    <li>
      <input
        type="checkbox"
        name={category.title}
        id={'check' + category.id + '_' + index}
      />
      <label htmlFor={'check' + category.id + '_' + index}>
        <i aria-hidden="true"></i>
        <span>{items}</span>
      </label>
    </li>
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
    <Form>
      {data.map((category) => (
        <CategoryBox key={category.id} category={category} />
      ))}
    </Form>
  )
}

export default CategoryBoxList
