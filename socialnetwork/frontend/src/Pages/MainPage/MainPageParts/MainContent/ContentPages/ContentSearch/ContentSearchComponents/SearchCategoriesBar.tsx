import SearchCategoryButton from './SearchCategoriesButton'

export default function SearchCategoriesBar() {
  return (
    <nav>
      <ul>
        <li className='ml-8'>
          <SearchCategoryButton text='Все' path='all'></SearchCategoryButton>
          <SearchCategoryButton text='Треки' path='tracks'></SearchCategoryButton>
          <SearchCategoryButton text='Исполнители' path='artists'></SearchCategoryButton>
          <SearchCategoryButton text='Плейлисты' path='playlists'></SearchCategoryButton>
          <SearchCategoryButton text='Альбомы' path='albums'></SearchCategoryButton>
          <SearchCategoryButton text='Профили' path='profiles'></SearchCategoryButton>
        </li>
      </ul>
    </nav>
  )
}
