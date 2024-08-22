
export default function EmptyPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-2/12">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle cx="30" cy="30" r="20" stroke="white" strokeWidth="2" fill="none"/>
        <circle cx="70" cy="70" r="25" stroke="white" strokeWidth="2" fill="none"/>
        <circle cx="50" cy="80" r="15" stroke="white" strokeWidth="2" fill="none"/>
        <circle cx="80" cy="20" r="10" stroke="white" strokeWidth="2" fill="none"/>
        <line x1="10" y1="10" x2="90" y2="90" stroke="white" strokeWidth="1"/>
        <line x1="10" y1="90" x2="90" y2="10" stroke="white" strokeWidth="1"/>
        <rect x="40" y="40" width="20" height="20" stroke="white" strokeWidth="1" fill="none"/>
        <rect x="60" y="20" width="10" height="10" stroke="white" strokeWidth="1" fill="none"/>
      </svg>
      </div>
      <h1 className="px-2 font-bold text-2xl">Произошла ошибка...</h1>  
    </div>
  )
}
