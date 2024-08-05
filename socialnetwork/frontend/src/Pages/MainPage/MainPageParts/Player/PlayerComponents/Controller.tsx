import { useEffect, useRef, useState } from "react"

export default function Controller() {

    const [isPlaying ,setIsPlaying] = useState(false);
    const [currentTime ,setCurrentTime] = useState(0);

    const audio = useRef<HTMLAudioElement | null>(null);

    const playAudio = ()=>{
        if(isPlaying){
            audio.current?.pause();
            setIsPlaying(false);
        }
        else{
            audio.current?.play();
            setIsPlaying(true);
        }
        
    }

    const updateTime = () =>{
        if(audio.current){
            setCurrentTime( Math.floor(audio.current?.currentTime) )
        }
    }

    const setTime = (timeElement : number | undefined ) =>{

        if( timeElement ){
            const secondsForAll = Math.floor( timeElement );
            
            const minutes = Math.floor(secondsForAll/60);
            const seconds = Math.floor(secondsForAll%60);

            let secondsString = seconds.toString();
            let minutesString = minutes.toString();

            if ( secondsString.length <=1 ){
                secondsString = "0" + secondsString;
            }

            if ( minutesString.length <=1 ){
                minutesString = "0" + minutesString;
            }
            
            return minutesString + ":" + secondsString
        }
        return '00:00'
    }

    audio.current?.addEventListener('timeupdate' , updateTime );

    
  return (
    <div className='flex flex-col justify-center items-center w-full h-f'>

        <audio src="/222.mp3" ref={audio}> </audio>

        <div className='flex justify-center items-center '>

            <button>
                <svg className="w-5 fill-main_l_grey" viewBox="0 0 32 32" transform="scale(-1 1)" >
                    <path d="M28.448 17.261 15.552 27.739C14.698 28.432 14 28.1 14 27v-6.938l-9.448 7.676C3.698 28.432 3 28.1 3 27V5c0-1.1.698-1.432 1.552-.739L14 11.937V5c0-1.1.698-1.432 1.552-.739l12.896 10.478c.854.693.854 1.829 0 2.522" />
                </svg>
            </button>

            <button className="px-5" onClick={()=>{playAudio()}}>
            
                <svg className="w-8 fill-main_l_grey" viewBox="0 0 24 24" >
                {isPlaying&&<path d="M9 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1"/>}
                {!isPlaying&&<path d="M18.54 9 8.88 3.46a3.42 3.42 0 0 0-5.13 3v11.12A3.42 3.42 0 0 0 7.17 21a3.43 3.43 0 0 0 1.71-.46L18.54 15a3.42 3.42 0 0 0 0-5.92Zm-1 4.19-9.66 5.62a1.44 1.44 0 0 1-1.42 0 1.42 1.42 0 0 1-.71-1.23V6.42a1.42 1.42 0 0 1 .71-1.23A1.5 1.5 0 0 1 7.17 5a1.54 1.54 0 0 1 .71.19l9.66 5.58a1.42 1.42 0 0 1 0 2.46Z"/>}
                </svg>
            </button>
            
            <button>
                <svg className="w-5 fill-main_l_grey" viewBox="0 0 32 32" >
                    <path d="M28.448 17.261 15.552 27.739C14.698 28.432 14 28.1 14 27v-6.938l-9.448 7.676C3.698 28.432 3 28.1 3 27V5c0-1.1.698-1.432 1.552-.739L14 11.937V5c0-1.1.698-1.432 1.552-.739l12.896 10.478c.854.693.854 1.829 0 2.522"/>
                </svg>
            </button>
        </div>

        <div className="flex w-1/2  text-main_l_grey items-center">
            <p>{setTime(currentTime)}</p>

            <input type="range" className="w-full mx-5 rounded-full p-0 music_range" 
                    value={currentTime}
                    min={0}
                    max={ audio.current?.duration ? Math.floor(audio.current?.duration) : 100}
                    onChange={
                        (action)=>{
                            console.log("change" , audio.current?.currentTime)
                            if(audio.current){
                                audio.current.currentTime = Number.parseInt(action.currentTarget?.value)
                            }
                        }
                    }     
            />

            <p>{ setTime(audio.current?.duration)}</p>
        </div>

    </div>
  )
}
