import CardAddition from "./ContentCardParts/CardAddition";
import CardHeader from "./ContentCardParts/CardHeader";
import CardList from "./ContentCardParts/CardList";
import CardPlayer from "./ContentCardParts/CardPlayer";

export default function ContentCard() {
  return (
    <section>
      <div className="flex flex-col">
        <CardHeader color='red-500'></CardHeader>
        <CardPlayer></CardPlayer>
        <CardList></CardList>
        <CardAddition></CardAddition>
      </div>
    </section>
  )
}
