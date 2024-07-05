import SearchCategoriesBar from "./ContentSearchComponents/SearchCategoriesBar";
import SearchTracksBlock from "./ContentSearchComponents/SearchTracksBlock";

export default function ContentSearch() {

  return (
    <section>
      <div className="flex flex-col">
        <SearchCategoriesBar></SearchCategoriesBar>
        <SearchTracksBlock></SearchTracksBlock>
      </div>
    </section>
  )
}
