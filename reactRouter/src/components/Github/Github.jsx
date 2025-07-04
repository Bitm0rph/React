import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // })
    return(
        <div className="bg-gray-600 text-white text-center m-20 rounded-3xl p-10 text-4xl">Github Followers : {data.followers}
        <img src={data.avatar_url} alt="Git pic" width={300} />
        </div>
    )
}


export default Github