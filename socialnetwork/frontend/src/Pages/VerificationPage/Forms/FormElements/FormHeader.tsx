
export default function FormHeader(props : {text : string}) {
  return (
    <div className='flex text-main_WHITE p-10 text-4xl font-bold flex-col  gap-5 '>
        <div className='flex justify-center'>
            <svg className='fill-main_WHITE w-20' viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">

            <path d="M 3 3 L 47 3 L 45 4 L 1 4 M 4 5 L 45 5 L 35 14 M 14 9 L 26 29 L 23 41 M 25 42 L 47 4 L 24 42 M 1 5 L 22 42 L 21 42 "/>
            {/* <path d="M 3 3 L 47 3 L 45 4 L 1 4 M 4 5 L 45 5 L 35 14 M 14 9 L 26 29 L 23 41 M 46 5 L 48 4 L 30 21 L 25 41 L 24 42 L 29 21 "/> */}
            </svg>
        </div>
        <h1 className='text-center'>{props.text}</h1>
    </div>
  )
}
