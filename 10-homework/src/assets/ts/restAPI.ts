import axios from "axios";
import { box, dbUrl } from "./const";
import { PlayerCard, PlayerCardInterface } from "./interfaces";

//GET POST PUT DELETE

// RETRIEVE | GET
const get = async <T>(urlExtra?: string) => {
  const {data} = await axios.get<T>(
    `${dbUrl}${urlExtra !== undefined ? urlExtra : ""}`
  );
  return data;
};

// Create | POST
const post = async (player: PlayerCardInterface) => {
  await axios.post(dbUrl, player).catch((err) => {
    console.log("Failed to post: ", err);
  });
};

// UPDATE | PUT
const put = async (player: PlayerCard) => {
  axios.put<PlayerCard>(`${dbUrl}/${player.id}`, player).catch((err) => {
    console.log("Failed to put: ", err);
  });
};


// DELETE | DELETE
const deleteById = async (id: string) => {
  await axios.delete(`${dbUrl}/${id}`).catch((err) => {
    console.log("Failed to delete: ", err);
  });
};

export { get, post, put, deleteById };
