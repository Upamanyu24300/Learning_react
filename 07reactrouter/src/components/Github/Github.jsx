import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/upamanyu24300')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)           
    //     })
    // }, [])

  return (
    <div className=' text-center m-4 bg-gray-600 text-white py-4 text-3xl'>
        Github Repos: {data.public_repos}
        <img src={data.avatar_url} width={300} className=' py-2 px-10' alt="No avatar" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/upamanyu24300')
    return response.json()
}