import React from 'react'
import { Item, ItemList, Box } from './CategoryStyle'
import CategoryLabel from './CategoryLabel'

const CategoryItem = ({ item, name }) => {
  return (
    <Item>
      <input
        type="checkbox"
        name={name}
        id={item.id}
        defaultChecked={item.selected === 'Y'}
      />
      <label htmlFor={item.id}>
        <i aria-hidden="true"></i>
        <span>{item.title}</span>
      </label>
    </Item>
  )
}

const CategoryItemList = ({ itemList, name }) => {
  return (
    <ItemList>
      {itemList.map((item) => (
        <CategoryItem key={item.id} name={name} item={item}></CategoryItem>
      ))}
    </ItemList>
  )
}
const CategoryBox = ({ category }) => {
  return (
    <Box>
      <CategoryLabel emoji={category.emoji} title={category.title} />
      <CategoryItemList
        itemList={category.categoryItemList}
        name={category.title}
      ></CategoryItemList>
    </Box>
  )
}

const CategoryBoxList = ({ data }) => {
  return (
    <>
      {data.map((category) => (
        <CategoryBox key={category.id} category={category}></CategoryBox>
      ))}
    </>
  )
}

export default CategoryBoxList
