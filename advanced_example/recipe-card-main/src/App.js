import "./App.css";
import Card from "./components/Card";
import food from "./assets/food.jpg";

function App() {
  const recipeAuthor = "An";
  const recipeItem = {
    title: "Nguyen Van An",
    date: "8 June 2021",
    image: food,
    description:
      "This creamy and spicy avocado sauce is a great way to prepare your everyday tacos. It's traditionally served with flautas or taquitos, but it also makes a great addition to some vegan enchiladas.",
  };

  const like= 502;
  const isLiked = true;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          author={recipeAuthor}
          title={recipeItem.title}
          date={recipeItem.date}
          description={recipeItem.description}
          liked={isLiked}
          likeCount={like}
        />
      </header>
    </div>
  );
}

export default App;
