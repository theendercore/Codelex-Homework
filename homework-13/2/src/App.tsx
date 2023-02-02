import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import { iCard, PseudoCard } from "./assets/ts/interfaces";
import axios, { Canceler } from "axios";
import { DB_URL } from "./assets/ts/const";
import EditScreen from "./components/EditScreen";
import AddScreen from "./components/AddScreen";

function App() {
  const [cards, setCards] = useState<iCard[] | null>(null);
  // const [mutableCard, setMutableCard] = useState<iCard | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState(DB_URL);

  useEffect(() => {
    setLoading(true);
    let cancel: Canceler;
    axios
      .get<iCard[]>(currentUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then(({ data }) => {
        setLoading(false);
        setCards(data);
      })
      .catch((error) => {
        console.error(error.code === "ERR_CANCELED" && "Request canceled");
      });

    return () => cancel();
  }, [currentUrl]);

  const deleteCard = (inCard: iCard) => {

    let updatedTodo: iCard[] = cards!!.filter((card) => card.id !== inCard.id);
    setCards(updatedTodo);
  };

  const editCard = (inCard: iCard) => {
    //TODO edit on db
    // setMutableCard(inCard);
    // console.log(inCard);
  };

  const addCard = (inCard: PseudoCard) => {
    axios
      .post<iCard>(DB_URL, inCard)
      .then(({ data }) => cards !== null && setCards([...cards, data]));
  };

  const saveCard: saveCard = (inCard: iCard | null) => {
    console.log("saved card", inCard);
    // setMutableCard(null);
  };

  return (
    <div className="App container mx-auto flex flex-col items-center p-10">
      {loading ? (
        <h2 className="self-center text-5xl text-slate-50">
          Page is loading...
        </h2>
      ) : (
        <>
          <EditScreen saveCard={null} />
          <CardList cards={cards} deleteCard={deleteCard} editCard={editCard} />
        </>
      )}
      <AddScreen addCard={addCard} />
    </div>
  );
}

export default App;
