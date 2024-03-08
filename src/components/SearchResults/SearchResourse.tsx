import React, { useEffect, useState } from "react"
import { UserCard } from "../UserCard/UserCard"
import "./style.css"

export function SearchResourse( { name } ) {
    console.log(name)
    const [usersList, setUsersList ] = useState([])
    
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