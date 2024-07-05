
export default function PlayButton() {

  return (
    <div className="size-14 bg-main_green rounded-full absolute bottom-1/10 right-1/10 
                    group-hover:translate-y-0 group-hover:opacity-100 transform 
                    translate-y-5 opacity-0 transition-all duration-150 ease-linear
                    shadow-black shadow-2xl drop-shadow-xl hover:bg-green-500 ">

        <div className="flex p-3 pl-4">
            <svg width="29px" height="29px" viewBox="0 0 15 15" fill="none">
                <path d="M4.79062 2.09314C4.63821 1.98427 4.43774 1.96972 4.27121 2.05542C4.10467 2.14112 4 2.31271 4 2.5V12.5C4 12.6873 4.10467 12.8589 4.27121 12.9446C4.43774 13.0303 4.63821 13.0157 4.79062 12.9069L11.7906 7.90687C11.922 7.81301 12 7.66148 12 7.5C12 7.33853 11.922 7.18699 11.7906 7.09314L4.79062 2.09314Z" fill="#000000"/>
            </svg>
        </div>
    </div>
  )
}
