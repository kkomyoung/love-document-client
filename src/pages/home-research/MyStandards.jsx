import React from 'react'
import styled from 'styled-components'
import { ReactComponent as IconEdit } from '../../assets/icon_edit.svg'
import CategoryLabel from '../../components/category/CategoryLabel'
import CategoryStandards from '../../components/category/CategoryStandards'

const data = [
  {
    id: 1,
    title: '외모',
    categoryItemList: [
      {
        id: 1,
        title: '키',
      },
      {
        id: 2,
        title: '체형',
      },
      {
        id: 3,
        title: '쌍꺼풀',
      },
      {
        id: 4,
        title: '안경',
      },
      {
        id: 5,
        title: '타투',
      },
    ],
  },
  {
    id: 2,
    title: '가치관',
    categoryItemList: [
      {
        id: 1,
        title: '종교',
      },
      {
        id: 2,
        title: '결혼관',
      },
    ],
  },
  {
    id: 3,
    title: '성격',
    categoryItemList: [
      {
        id: 1,
        title: '외향vs내향',
      },
    ],
  },
  {
    id: 4,
    title: '연애스타일',
    categoryItemList: [
      {
        id: 1,
        title: '연애리스크',
      },
      {
        id: 2,
        title: '스킨십',
      },
    ],
  },
]

const MyStandards = () => {
  return (
    <StyledSection>
      <div className="innerBox">
        <div className="boxHead">
          <h4>내 기준</h4>
          <button>
            <i aria-hidden="true">
              <IconEdit></IconEdit>
            </i>
            <span>편집</span>
          </button>
        </div>
        {data.map((categories) => (
          <StyledCategoryList key={categories.id}>
            <CategoryLabel category={categories.title} />
            <CategoryStandards items={categories.categoryItemList} />
          </StyledCategoryList>
        ))}
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 0 2rem;
  margin-top: 2.8rem;

  .innerBox {
    padding: 2rem 2rem 1rem;
    border-radius: 0.8rem;
    background: ${(props) => props.theme.gray100};
  }

  .boxHead {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.3rem;
  }

  h4 {
    ${(props) => props.theme.fontSize.h4_sb};
  }

  button {
    padding: 0.7rem;
    ${(props) => props.theme.fontSize.label_s_m};
    color: ${(props) => props.theme.gray700};

    i {
      margin-right: 0.6rem;
    }
  }
`

const StyledCategoryList = styled.div`
  & + & {
    margin-top: 2.4rem;
  }

  label strong {
    margin-bottom: 1.2rem;
  }
`

export default MyStandards
