import { WORDS } from "./Words";

const getWords = () => {
  return WORDS;
}

export const getWordOfTheDay = () => {
  const words = getWords();
  const wordOfTheDay = words[getDayOfTheYear()];
  return wordOfTheDay.toUpperCase();
}

export const isValidWord = async (word: string) => {  
  try {
    const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;  //online dictionery api link 
    const response = await fetch(URL);
    if (response.status !== 200) throw new Error("Request Failed");
    const json = await response.json();

    return json.length;
  } catch (e) {
    console.log(e);
    return false;
  }
}


const getDayOfTheYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff =
    (now as any) -
    (start as any) +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000

  const oneDay = 1000 * 60 * 60 * 24;     //1 sec = 1000 milisec,60 minute,24 hour  
  return Math.floor(diff / oneDay);
}