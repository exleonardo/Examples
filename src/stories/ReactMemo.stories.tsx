import React , {useState} from "react";


export default {
    title: "React.memo"
}
const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{props.users.map ( (el , i) => <div key={i}>{el}</div> )}</div>
}
const Users = React.memo ( UsersSecret )


export const Example1 = () => {
    const [counter , setCounter] = useState ( 0 );
    const [users , setUsers] = useState ( ["dimych" , "valera" , "Igor"] )
    const addUser = () => {
        const newUsers = [...users , "Sveta" + new Date ().getTime ()]
        setUsers ( newUsers )
    }
    return (
        <>
            <button onClick={() => setCounter ( counter + 1 )}>+</button>
            <button onClick={addUser}>Add user</button>
            <NewMessageCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}
