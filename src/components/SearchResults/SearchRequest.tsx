import { useEffect, useState } from "react"
import { UserCard } from "../UserCard/UserCard"
import "./style.css"

export function SearchRequest( { name } : {name : string} ) {
    const [usersList, setUsersList ] = useState([])

    async function fetchUsers() {
        const response = await fetch(`https://dummyjson.com/users/search?q=${name}`)
        const usersList = await response.json()
        setUsersList(usersList.users)
    }

    useEffect(() => {
        fetchUsers();
    }, [name]);

    return (
        <div>
            <div className="usersList">
                {usersList
                    .map((user, index) => (
                        <UserCard key={index} {...user} />
                ))}
            </div> 
        </div>
    )
}