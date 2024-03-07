import { useContext } from "react";
import { FilterContext } from "./FilterContext";
import { UserCard } from "../UserCard/UserCard";
import { SearchForm } from "../SearchFrom/SearchForm";

import "./style.css";

export function FilterUsers() {
  const { users } = useContext(FilterContext);

  const filteredValue = users.filter(user => {
    return user.name.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <div className="usersList">
      {filteredValue.map((user) => (
        <UserCard {...user} />
      ))}
    </div>
  );
}



// export function FilterUsers(user){
    // const filteredValue = users.filter(user => {
    //     return user.name.toLowerCase().includes(value.toLowerCase())
    //   })
// } 
