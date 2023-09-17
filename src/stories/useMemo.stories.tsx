import React , {useMemo , useState} from "react";

export default {
    title: 'useMemo'
}


export const DifficultExample = () => {
    const [a , setA] = useState<number> ( 3 )
    const [b , setB] = useState<number> ( 3 )
    let resultA = 1;
    let resultB = 1;

    resultA = useMemo ( () => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
            }
            tempResultA *= i
        }
        return tempResultA
    } , [a] );


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }
    return <>
        <input value={a} onChange={(e) => setA ( +e.currentTarget.value )}/>
        <input value={b} onChange={(e) => setB ( +e.currentTarget.value )}/>
        <hr/>
        <div>
            Result for a : {resultA}
        </div>
        <div>
            Result for b : {resultB}
        </div>
    </>
}

export const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{props.users.map ( (el , i) => <div key={i}>{el}</div> )}</div>
}
export const Users = React.memo ( UsersSecret )
export const HelpsForReactMemo = () => {
    console.log ( "Example" )
    const [counter , setCounter] = useState ( 0 );
    const [users , setUsers] = useState ( ["dimych" , "valera" , "Igor" , 'Artem'] )

    const newArr = useMemo ( () => {
        console.log ( "UseMemo" )
        return users.filter ( (el) => el.toLowerCase ().indexOf ( "a" ) > -1 )
    } , [users] )
    const addUser = () => {
        const newUsers = [...users , "Sveta" + new Date ().getTime ()]
        setUsers ( newUsers )
    }
    return <>
        <button onClick={() => setCounter ( counter + 1 )}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArr}/>
    </>
}
