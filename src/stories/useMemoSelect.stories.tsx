import {useState} from "react";
import Selected from "../components/Select/Select";

export default {
    title: 'useMemoSelected'
}

export const SelectedUseMemo = ()=>{
    const [ value, setValue ] = useState( [
        {value: "1", title: "Minsk"},
        {value: "2", title: "Moskow"},
        {value: "3", title: "Kiew"},
        {value: "1", title: "Gomel"},
        {value: "1", title: "Grodno"},
        {value: "1", title: "Rechitca"},
        {value: "1", title: "Brest"},
    ])
    return (
        <>
            <Selected onChange={setValue} items={value.filter(el=>el.value.indexOf("1")<-1)}/>
            <div><Selected onChange={setValue} items={value}/></div>
        </>
    )
}