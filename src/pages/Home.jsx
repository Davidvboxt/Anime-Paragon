import React from "react";
import { AnimePopular, Header, Categories, AnimeTopPicks, AnimeHighlights } from "../components";

export const Home = () => {
  return (
    <main>
      <Header />
      <Categories />
      <AnimePopular />
      <AnimeTopPicks />
      <AnimeHighlights />
      <AnimePopular />
    </main>
  );
};
  