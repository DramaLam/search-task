import React, { useEffect, useState } from "react"
import { UserCard } from "../UserCard/UserCard"
import "./style.css"

export function SearchRequest( { name } ) {
    const [usersList, setUsersList ] = React.useState([])

    async function fetchUsers() {
        const response = await fetch(`https://dummyjson.com/users/search?q=${name}`)
        const usersList = await response.json()
        setUsersList(usersList.users)
        console.log(name)
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