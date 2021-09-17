import React from "react";
import { Dictionarystyle, Navbarstyle, Yandexstyle } from "./style";

function Navbar() {
  return (
    <Navbarstyle>
      <p>
        <Yandexstyle>
          <span>Y</span>andex
        </Yandexstyle>
        <Dictionarystyle>dictionary</Dictionarystyle>
      </p>
    </Navbarstyle>
  );
}

export default Navbar;
