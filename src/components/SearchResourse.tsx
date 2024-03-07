import { useEffect, useState } from "react"

export default function SearchResourse() {
    const [loading, setLoading] = useState(false)
    const [usersList, setUsersList] = useState([])
    
    async function fetchUsers() {
        setLoading(true)
        const response = await fetch('https://dummyjson.com/users/search?q=')
        const usersList = await response.json()
        setUsersList(usersList)
        setLoading(false)
    }

    useEffect(() => {
        fetchUsers()
      }, [fetchUsers])

    return (
        <div>
            {loading && <p>Loading...</p>}
            {/* {loading && console.log('Loading...')} */}
            {!loading && (
                <>
                    <input type="text" className="control" {...input} />
                    <ul>
                        {usersList
                        // .filter((user) =>
                        //     user.name.toLowerCase().includes(input.value.toLowerCase())
                        // )
                        .map((user) => (
                            <li key={user.id}>{user.firstName}</li>
                        ))}
                    </ul>
                    </>
      )}
        </div>
    )
}