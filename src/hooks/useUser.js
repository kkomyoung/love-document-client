import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getUserInfo } from '../apis'
import { useNavigate } from 'react-router-dom'
import { ERR_CODE } from '../utils/constants'

export default function useUser() {
  const { data } = useQuery('user-info', getUserInfo)
  const navigate = useNavigate()

  useEffect(() => {
    if (data && data.code === ERR_CODE.U001) {
      navigate('/research', { replace: true })
    }
  }, [data, navigate])

  return { user: data, isLoading: !data }
}
