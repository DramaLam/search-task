import React, { useEffect } from "react"
import { UserCard } from "../UserCard/UserCard"
import "./style.css"

// Request to the api to search for a user. Displaying data
export function SearchResourse( { name } : {name : string} ) {
    const [usersList, setUsersList ] = React.useState([])

    async function fetchUsers() {
        try {
            const response = await fetch('https://dummyjson.com/users/search?q=')
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
    }, []);

    return (
        <div>
            <div className="usersList">
                {usersList
                    .filter((user) =>
                        user.firstName.toLowerCase().includes(name.toLowerCase())
                    )
                    .map((user, index) => (
                        <UserCard key={index} {...user} />
                ))}
            </div>
        </div>
    )
}