import React from 'react'
import styled from 'styled-components'
import { ReactComponent as IconEdit } from '../../assets/icon_edit.svg'
import CategoryLabel from '../../components/category/CategoryLabel'
import CategoryStandards from '../../components/category/CategoryStandards'
// import { Link } from 'react-router-dom'
import { getIdeals } from '../../apis'
import { useQuery } from 'react-query'

const MyStandards = ({ openToastPopup }) => {
  const { data } = useQuery('userIdeals', getIdeals)
  // console.log(data)

  return (
    <>
      {data && (
        <StyledSection>
          <div className="innerBox">
            <div className="boxHead">
              <h4>내 기준</h4>
              <button onClick={() => openToastPopup('서비스 준비 중입니다')}>
                <i aria-hidden="true">
                  <IconEdit></IconEdit>
                </i>
                <span>편집</span>
              </button>
              {/* <Link to={'/home/standard'}>
                <i aria-hidden="true">
                  <IconEdit></IconEdit>
                </i>
                <span>편집</span>
              </Link> */}
            </div>
            {data.map((categories) => (
              <StyledCategoryList key={categories.categoryTitle}>
                <CategoryLabel category={categories.categoryTitle} />
                <CategoryStandards items={categories.idealInfoList} />
              </StyledCategoryList>
            ))}
          </div>
        </StyledSection>
      )}
    </>
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

  a,
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
