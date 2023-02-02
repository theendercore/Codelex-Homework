import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import { iCard, PseudoCard } from "./assets/ts/interfaces";
import axios, { Canceler } from "axios";
import { DB_URL } from "./assets/ts/const";
import CardForm from "./components/CardForm";

function App() {
  const [cards, setCards] = useState<iCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [editing, setEditing] = useState<boolean>(false);
  const [editableCard, setEditableCard] = useState<iCard>({
    id: -1,
    title: "oh no",
    text: "oh no",
    url: "oh no",
  });

  //Load cards upon page load

  useEffect(() => {
    setLoading(true);
    let cancel: Canceler;
    axios
      .get<iCard[]>(DB_URL, {
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
  }, []);

  const addCard = (inCard: PseudoCard) => {
    setLoading(true);
    axios
      .post<iCard>(DB_URL, inCard)
      .then(({ data }) => {
        setCards([...cards, data]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCard = (inCard: iCard) => {
    setLoading(true);
    axios
      .delete(`${DB_URL}/${inCard.id}`)
      .then(() => {
        console.log(inCard);
        let updatedTodo: iCard[] = cards.filter(
          (card) => card.id !== inCard.id
        );
        setCards(updatedTodo);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Failed to delete: ", err);
        setLoading(false);
      });
  };

  const closeEditScreen = () => {
    setEditing(false);
  };

  const editCard = (inCard: iCard) => {
    if (editing) {
      return alert("Please finish editing first");
    }
    setEditing(true);
    setEditableCard(inCard);
  };

  const saveCard = (inCard: iCard) => {
    setLoading(true);
    axios
      .put<iCard>(`${DB_URL}/${inCard.id}`, inCard)
      .then(() => {
        let updatedTodo: iCard[] = cards.filter(
          (card) => card.id !== inCard.id
        );
        setCards([...updatedTodo, inCard]);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log("Failed to put: ", err);
      });

    setEditing(false);
  };

  return (
    <div className="App container mx-auto flex flex-col items-center p-10">
      {loading ? (
        <h2 className="self-center text-5xl text-slate-50">
          Page is loading...
        </h2>
      ) : (
        <>
          {!editing ? (
            <></>
          ) : (
            <CardForm
              onSubmit={saveCard}
              title={"Editing Card"}
              onClose={closeEditScreen}
              card={editableCard}
            />
          )}
          <CardList cards={cards} deleteCard={deleteCard} editCard={editCard} />
          <CardForm onSubmit={addCard} title={"Add New"} />
        </>
      )}
    </div>
  );
}

export default App;
