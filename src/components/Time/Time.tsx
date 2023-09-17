import React , {useEffect , useState} from 'react';
import s from './Time.module.css'




const get2digitsString=(number:number)=> number <10 ? "0"+number:number
const Time = () => {

    const [time,setTime]=useState(new Date())
    console.log ("Time second RENDER")

    useEffect ( () => {
       const intervalId = setInterval(()=>{
            setTime(new Date())
        },1000)

    } , [] );

    return (
        <div>
            {get2digitsString(time.getHours())}:
            {get2digitsString(time.getMinutes())}:
            {get2digitsString(time.getSeconds())}
        </div>
    );
};
const fixTime = (time:number)=>{
    return time<10?'0'+time:time
}
export const NewTime = ()=>{
    const [time,setTime] = useState(new Date())
    useEffect ( () => {
      const idInterval=  setInterval(()=>{
            setTime(new Date())
          console.log ("tick")
        },1000)
        return ()=>{
            clearInterval(idInterval)
        }
    } , [] );

    let hours =360/12 * time.getHours() + 30 / 60 * time.getMinutes() +0.5 / 60* time.getSeconds();
    let minutes = 360 /60 * time.getMinutes() + 6/60 * time.getSeconds();
    let second =360/60* time.getSeconds();

const secondStyle:any = {
    content: "",
    width: '1px',
    height: '49px',
    background: '#ad3d5e',
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    top:'-49px',
    margin:' auto',
    overflow: 'auto',
    zIndex: '2',
    transformOrigin: "bottom center",
    transform: `rotate(${second}deg)`
}
const minutesStyle:any = {
    content: "",
    width: '1px',
    height: '40px',
    background: '#5676b8',
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    top:'-40px',
    margin:' auto',
    overflow: 'auto',
    zIndex: '2',
    transformOrigin: "bottom center",
    transform: `rotate(${minutes}deg)`
}
const hoursStyle:any = {
    content: "",
    width: '1px',
    height: '30px',
    background: '#52eebf',
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    top:'-30px',
    margin:' auto',
    overflow: 'auto',
    zIndex: '2',
    transformOrigin: "bottom center",
    transform: `rotate(${hours}deg)`
}

    return (
        <>
            {/*<span>{fixTime(time.getHours())}:</span>*/}
            {/*<span>{fixTime(time.getMinutes())}:</span>*/}
            {/*<span>{fixTime(time.getSeconds())}</span>*/}
            <div className={s.clock}>
                <div className={s.center}>
                    <div style={secondStyle} ></div>
                    <div style={hoursStyle}></div>
                    <div style={minutesStyle}></div>
                </div>

            </div>
        </>
    )
}

export default Time;