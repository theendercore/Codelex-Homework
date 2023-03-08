interface JokeResponse {
  error: boolean;
  amount: number;
  jokes: Joke[];
}

interface Joke {
  category:
    | "Programming"
    | "Any"
    | "Misc"
    | "Programming "
    | "Dark"
    | "Pun"
    | "Spooky"
    | "Christmas";
  type: "single" | "twopart";
  joke: string;
  flags: Flags;
  id: number;
  safe: boolean;
  lang: "en" | "cs" | "de" | "es" | "fr" | "pt";
}

interface Flags {
  nsfw: boolean;
  religious: boolean;
  political: boolean;
  racist: boolean;
  sexist: boolean;
  explicit: boolean;
}
