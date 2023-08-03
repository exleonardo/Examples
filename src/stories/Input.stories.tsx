import {ChangeEvent, useState} from 'react';
import {useRef} from 'react';



export default {
    title: 'input',
    // component: ,
    parameters: {
        layout: 'fullscreen',
    }
}
export const UncontrolledInput = ()=> <input/>
export const TrackValueOfUncontrolledInput = ()=> {
    const [value,setValue]=useState("")
    const onChange = (e:ChangeEvent<HTMLInputElement>)=>setValue(e.currentTarget.value)
        return (
            <><input onChange={onChange} />-
                {value}
            </>
            )

}
export const GetValueOfUncontrolledInputByButtonPress = ()=> {
    const [value,setValue]=useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const save =()=>{
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return (
        <><input ref={inputRef} /><button onClick={save} >Save</button> - actual value:
            {value}
        </>
    )

}

export const ControlledInput =()=>{
    const [parentValue,setParentValue]=useState("")
    const onChange = (e:ChangeEvent<HTMLInputElement>)=>setParentValue(e.currentTarget.value)
    return <input value={parentValue} onChange={onChange} />
}
export const ControlledCheckBox = ()=>{
    const [parentValue,setParentValue]=useState(true)
    const onChange = (e:ChangeEvent<HTMLInputElement>)=>setParentValue(e.currentTarget.checked)
    return <input type="checkbox" checked={parentValue}  onChange={onChange} />
}
export const ControlledSelect = ()=>{
    const [parentValue,setParentValue]=useState<string|undefined>(undefined)
    const onChange = (e:ChangeEvent<HTMLSelectElement>)=> {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange} >
        <option > none</option>
        <option value="1">Minsk</option>
        <option value="2">Moskow</option>
        <option value="3">Kiev</option>

    </select>
}

export const ControlledInputWithFixedValue = ()=> <input value={"It-incubator.by"}/>
