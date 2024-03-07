import { useEffect, useState } from "react"
import useInput from "../hooks/useInput"
import { UserCard } from "./UserCard/UserCard"

export default function SearchResourse() {

    const [usersList, setUsersList ] = useState([])
    const input = useInput()
    
    async function fetchUsers() {
        const response = await fetch('https://dummyjson.com/users/search?q=')
        const usersList = await response.json()
        setUsersList(usersList.users)
    }

    useEffect(() => {
        fetchUsers();
    }, []);

     return (
        <div>
            <div className="usersList">
                {usersList.map((user, index) => (
                    <UserCard key={index} {...user} />
                ))}
            </div>
        </div>
    )
}