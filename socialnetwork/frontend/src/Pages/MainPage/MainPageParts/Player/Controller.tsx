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
        if(audio.current?.currentTime){
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

        <div className='flex justify-center items-center'>
            <button>
                <svg className="w-7 fill-main_l_grey" viewBox="0 0 32 32" transform="scale(-1 1)" >
                    <path d="M28.448 17.261 15.552 27.739C14.698 28.432 14 28.1 14 27v-6.938l-9.448 7.676C3.698 28.432 3 28.1 3 27V5c0-1.1.698-1.432 1.552-.739L14 11.937V5c0-1.1.698-1.432 1.552-.739l12.896 10.478c.854.693.854 1.829 0 2.522" />
                </svg>
            </button>
            <button className="px-5" onClick={()=>{playAudio()}}>
            
                <svg className="w-10 fill-main_l_grey" viewBox="-4 -3 24 24" >
                    <path d="M13.82 9.523a.976.976 0 0 0-.324-1.363L3.574 2.128a1.03 1.03 0 0 0-.535-.149c-.56 0-1.013.443-1.013.99V15.03c0 .185.053.366.153.523.296.464.92.606 1.395.317l9.922-6.031c.131-.08.243-.189.325-.317zm.746 1.997-9.921 6.031c-1.425.867-3.3.44-4.186-.951A2.9 2.9 0 0 1 0 15.03V2.97C0 1.329 1.36 0 3.04 0c.567 0 1.123.155 1.605.448l9.921 6.032c1.425.866 1.862 2.696.975 4.088-.246.386-.58.712-.975.952"/>
                </svg>
            </button>
            <button>
                <svg className="w-7 fill-main_l_grey" viewBox="0 0 32 32" >
                    <path d="M28.448 17.261 15.552 27.739C14.698 28.432 14 28.1 14 27v-6.938l-9.448 7.676C3.698 28.432 3 28.1 3 27V5c0-1.1.698-1.432 1.552-.739L14 11.937V5c0-1.1.698-1.432 1.552-.739l12.896 10.478c.854.693.854 1.829 0 2.522"/>
                </svg>
            </button>
        </div>

        <div className="flex w-1/2 pb-3 text-main_l_grey">
            <p>{setTime(currentTime)}</p>

            <input type="range" className="w-full rounded-full mx-5  hover:bg-main_red" 
                    value={currentTime}
                    min={0}
                    max={ audio.current?.duration ? Math.floor(audio.current?.duration) : 100}
                    onChange={
                        (action)=>{
                            if(audio.current?.currentTime){
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
