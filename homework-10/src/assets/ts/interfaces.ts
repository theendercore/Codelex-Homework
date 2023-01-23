interface PlayerCard extends PlayerCardInterface{
  id: number;
}
interface PlayerCardInterface {
  title: string;
  text: string;
  skin: string;
}


export { PlayerCard, PlayerCardInterface } 
