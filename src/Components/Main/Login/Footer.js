import React from "react";

export default function Footer() {
  return (
    <div className="mt-10 lg:mt-0 lg:absolute bottom-0 lg:right-0">
      <img
        className="hidden lg:block cursor-pointer"
        src={"helloU-web.png"}
        alt="HelloU"
        onClick={() => window.open("https://hellou.heroesleague.us/")}
      />
      <img
        className="block lg:hidden w-52 h-52 cursor-pointer"
        src={"helloU-mobile.png"}
        alt="HelloU"
        onClick={() => window.open("https://hellou.heroesleague.us/")}
      />
    </div>
  );
}
