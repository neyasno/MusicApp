
const NavList = ( props : {elements: string[] , title:string }) =>{
  return(
    <div className="flex flex-col w-full pr-7">
      <h5 className="font-bold text-main_white">{props.title}</h5>
      <ul>
        {
          props.elements.map((element , index)=>(

          <li className="font-normal text-main_l_grey hover:underline p-1" key={index}>
            <a href="">{element}</a>
          </li>

        ))
        }
      </ul>
    </div>
    
  )
}

export default function MainPageFooter() {
  const listCompany = ['О нас' , 'Вакансии' , 'Новости'];
  const listCommunity = ['О нас' , 'Вакансии' , 'Новости'];
  const listLinks = ['О нас' , 'Вакансии' , 'Новости'];
  const listPlans = ['Индивидуальная подписка' , 'Бесплатная версия'];
  


  return (
    <footer className="w-full"> 
        <div className="w-full flex flex-col">
          <nav>
              <div className="flex p-10 w-4/5 text-lg mb-10">
                <NavList title="Компания" elements={listCompany}></NavList>
                <NavList title="Сообщества" elements={listCommunity}></NavList>
                <NavList title="Полезные ссылки" elements={listLinks}></NavList>
                <NavList title="Наши планы" elements={listPlans}></NavList>
              </div>
          </nav>
        </div>
        <div className="mx-10 py-10 border-t-1 border-main_l_grey">
          <p>@ 2024 Cделано в образовательных целях</p>
        </div>
    </footer>
  )
}
