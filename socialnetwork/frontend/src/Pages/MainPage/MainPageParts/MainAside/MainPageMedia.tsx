
const MediaHeader =  () =>{
  return(
    <div className="flex justify-between p-4">
          <div className="flex items-center">
            <div>
              <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" fill="white" height='30'>
                <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
              </svg>
            </div>
            <h3 className="pl-3">Моя медиатека</h3>
          </div>
          <div className=" hover:bg-zinc-900 rounded-full font-light size-8 border-main_l_grey border-1">
          </div>
        </div>
  )
}

const MediaPlaylists = () => {
  return(
    <div className="bg-neutral-800 rounded-lg p-4 text-white">
          <h3 className="text-lg">Создай свой первый плейлист</h3>
          <p className="mt-2">Это совссем не сложно! Мы поможем.</p>
          <button className="bg-white text-black rounded-full py-2 px-4 mt-5 border-1 border-white hover:bg-neutral-800 hover:text-white hover:border-1 hover:border-white">Создать плейлист</button>
    </div>
  )
}

const MediaNavigation = ()=>{
  return(
    <nav>
      <div className="p-2 flex flex-wrap">
          <NavigatonElement text="Юридичесская информация" link=""></NavigatonElement>
          <NavigatonElement text="Центр безопасности и конфиденциальности" link=""></NavigatonElement>
          <NavigatonElement text="Политика конфиденциальности" link=""></NavigatonElement>
          <NavigatonElement text="Файлы cookie" link=""></NavigatonElement>
          <NavigatonElement text="О рекламе" link=""></NavigatonElement>
          <NavigatonElement text="Специальные возможности" link=""></NavigatonElement>
        </div>
    </nav>
  )
}

const LanguageButton = () =>{
  return(
    <button className="flex p-2 m-4 border-1 border-white rounded-full justify-center items-center w-2/6 hover:border-2 hover:underline">
          <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" height='20' fill="white">
            <path d="M8.152 16H8a8 8 0 1 1 .152 0zm-.41-14.202c-.226.273-.463.713-.677 1.323-.369 1.055-.626 2.496-.687 4.129h3.547c-.06-1.633-.318-3.074-.687-4.129-.213-.61-.45-1.05-.676-1.323-.194-.235-.326-.285-.385-.296h-.044c-.055.007-.19.052-.391.296zM4.877 7.25c.062-1.771.34-3.386.773-4.624.099-.284.208-.554.329-.806a6.507 6.507 0 0 0-4.436 5.43h3.334zm-3.334 1.5a6.507 6.507 0 0 0 4.436 5.43 7.974 7.974 0 0 1-.33-.806c-.433-1.238-.71-2.853-.772-4.624H1.543zm4.835 0c.061 1.633.318 3.074.687 4.129.214.61.451 1.05.677 1.323.202.244.336.29.391.297l.044-.001c.06-.01.19-.061.385-.296.226-.273.463-.713.676-1.323.37-1.055.626-2.496.687-4.129H6.378zm5.048 0c-.061 1.771-.339 3.386-.772 4.624-.082.235-.171.46-.268.674a6.506 6.506 0 0 0 4.071-5.298h-3.03zm3.031-1.5a6.507 6.507 0 0 0-4.071-5.298c.097.214.186.44.268.674.433 1.238.711 2.853.772 4.624h3.031z"></path>
          </svg>
          <p className="ml-2">English</p>
    </button>
  )
}

const NavigatonElement = (props:{link:string , text:string}) =>{
  return(
    <a href={props.link}>
      <p className="text-main_l_grey font-normal text-xs p-2 px-3">{props.text}</p>
    </a>
    
  )
}

export default function MainPageMedia() {
  return (
    <div className="flex flex-col p-2 mt-2 rounded-lg bg-main_black text-main_l_grey font-bold h-full w-full">
      <div className="flex flex-col">
        <MediaHeader></MediaHeader>
        <MediaPlaylists></MediaPlaylists>
      </div>
        <MediaNavigation></MediaNavigation>
        <LanguageButton></LanguageButton>
    </div>
  )
}
