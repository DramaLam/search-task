import { useEffect, useState } from "react"
import { UserCard } from "../UserCard/UserCard"
import "./style.css"

// Search for users from a third-party resource on request. Displaying data
export function SearchRequest( { name } : {name : string} ) {
    const [usersList, setUsersList ] = useState([])

    async function fetchUsers() {
        try {
            const response = await fetch(`https://dummyjson.com/users/search?q=${name}`)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const usersList = await response.json()
            setUsersList(usersList.users)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
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