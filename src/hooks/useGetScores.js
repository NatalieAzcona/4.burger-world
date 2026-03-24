import { useQuery } from '@tanstack/react-query'


const useGetScores = () => {

const url = "http://localhost:3000/scores/"

const { data } = useQuery({
    queryKey: ['scores'],
    queryFn: async () => {
      const response = await fetch(url)
      return response.json()
    }
  })
  return data
}

export default useGetScores
