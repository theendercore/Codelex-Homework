import { Route } from "@tanstack/react-router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import rootRoute from "../Root";
import { moves, move, state } from "../assets/const";
import StartGame from "../components/StartGame";
import GameAnimate from "../components/GameAnimate";

const gameRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/game",
  component: GameRoute,
});

function GameRoute() {
  const { t } = useTranslation();
  const [playerMove, setPlayerMove] = useState<move>("rock");
  const [aiMove, setAiMove] = useState<move>("paper");
  const [gameState, setGameState] = useState<state>("start");
  function start(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setAiMove(moves[Math.floor(Math.random() * moves.length)]);
    setGameState("move");
  }
  function end (e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    setGameState("end")
  }

  return (
    <div className="GameRoute m-auto h-screen p-10">
      <div className="container m-auto flex flex-col items-center justify-center">
        <h2>{t("game.title")}</h2>
        {
          {
            start: (
              <StartGame
                playerMove={playerMove}
                setMove={setPlayerMove}
                startGame={start}
              />
            ),
            move: <GameAnimate playerMove={playerMove} aiMove={aiMove} animTime={10} endGame={end} />,
            end: <h2>its over</h2>,
          }[gameState]
        }
      </div>
    </div>
  );
}
export default gameRoute;
