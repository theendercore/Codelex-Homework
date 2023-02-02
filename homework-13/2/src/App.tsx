import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import { iCard } from "./assets/ts/interfaces";
import axios, { Canceler } from "axios";
import { DB_URL } from "./assets/ts/const";
import EditScreen from "./components/EditScreen";

function App() {
  const [cards, setCards] = useState<iCard[] | null>(null);
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
    //TODO delete from db

    let updatedTodo: iCard[] = cards!!.filter((card) => card.id !== inCard.id);
    setCards(updatedTodo);
  };
  const editCard = (inCard: iCard) => {
    //TODO edit on db
    alert(inCard.title);
  };
  const addCard = (inCard: iCard) => {
    //TODO add to db
  };

  return (
    <div className="App container mx-auto p-10 ">
      {loading ? (
        <h2>Page is loading...</h2>
      ) : (
        <>
          <EditScreen />
          <CardList cards={cards} deleteCard={deleteCard} editCard={editCard} />
        </>
      )}
      <button
        className="w-max rounded-full bg-red-400 p-2"
        onClick={() => alert("aaa")}
      >
        AAAAAA
      </button>
    </div>
  );
}

export default App;
