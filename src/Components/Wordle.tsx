import React, { useEffect, useState } from 'react';
import useWindow from '../Hooks/useWindow';
import { getWordOfTheDay } from '../Service/request';

import RowCompleted from './RowCompleted';
import RowCurrent from './RowCurrent';
import RowEmpty from './RowEmpty';
import { GameStatus } from './types';

const keys = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];

const Wordle = () => {
  const [wordOfTheDay, setWordOfTheDay] = useState<string>('');
  const [turn, setTurn] = useState<number>(1);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [completedWords, setCompletedWords] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing);


  useWindow("keydown", handleKeyDown);

  useEffect(() => {
    setWordOfTheDay(getWordOfTheDay());      //kayo character word sathe match thay che aey effect show kare che
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    const letter = event.key.toUpperCase();

    if (gameStatus === GameStatus.Playing) {
      return;
    }

    if (event.key === 'Backspace' && currentWord.length > 0) {
      onDelete();
      return;
    }
    if (event.key === 'Enter' && currentWord.length === 5 && turn <= 6) {
      onEnter();
      return;
    }
    if (currentWord.length >= 5) {
      return;
    }
    if (keys.includes(letter)) {
      onInput(letter);
      return;
    }
  }

  const onInput = (letter: string) => {
    const newWord = currentWord + letter;
    setCurrentWord(newWord);
  }

  const onDelete = () => {
    const newWord = currentWord.slice(0, -1);
    setCurrentWord(newWord);
  }

  const onEnter = () => {
    if (currentWord === wordOfTheDay) {
      setCompletedWords([...completedWords, currentWord])
      setGameStatus(GameStatus.Won);
      return;
    }
  }

  if (turn === 6) {
    setCompletedWords([...completedWords, currentWord]);      // 6 time word type kari sakay then game lost
    setGameStatus(GameStatus.Lost);
    return;
  }

  if(currentWord.length === 5 && !isValidWord(currentWord)){
    alert('Not a Valid Word');
    return;
  }

  setCompletedWords([...completedWords, currentWord]);
  setTurn(turn + 1);
  setCurrentWord("");

  return (
    <>
      <div>
        {completedWords.map((word, i) => (
          <RowCompleted word={word} solution={wordOfTheDay} />
        ))}
        {gameStatus === GameStatus.Playing ? (
          <RowCurrent word={currentWord} />
        ) : null}

        {Array.from(Array(6 - turn)).map((_, i) => (
          <RowEmpty key={i} />
        ))}
      </div>
    </>
  );
}

export default Wordle;