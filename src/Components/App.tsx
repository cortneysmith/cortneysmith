import React, { Component } from "react";
import { Link } from "react-router-dom";
import Wishlist from "./Wishlist";

interface AppState {}

class App extends Component {
  state = {
    meta: {},
    data: []
  };

  render() {
    return (
      <div className="App">
        <p>This is my app!</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non
          odio vel tortor semper lacinia ut sed erat. Pellentesque ultrices sem
          ut tincidunt efficitur. Donec a mi commodo, suscipit purus vitae,
          lacinia tortor. Integer rutrum erat eget risus varius, viverra blandit
          quam convallis. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Mauris volutpat ornare cursus. Suspendisse ullamcorper turpis
          non justo porttitor vestibulum. Vestibulum fringilla euismod libero,
          eget efficitur velit semper semper. Suspendisse dignissim sagittis est
          vitae congue. Nam porta lorem eget libero porttitor, et vestibulum
          sapien ullamcorper. Aliquam ut ultrices nisl.
        </p>

        <p>
          Vestibulum eget hendrerit arcu, vitae maximus nunc. Aenean eget mi
          vitae ligula aliquam rutrum. Proin tincidunt blandit tincidunt. Nulla
          vitae mi vel ante tristique hendrerit. Pellentesque faucibus vitae
          eros sit amet efficitur. Nullam odio quam, varius nec gravida ut,
          iaculis vitae magna. Vivamus lacinia tempus magna vitae tincidunt.
          Curabitur gravida accumsan arcu id pretium. Suspendisse ultrices lorem
          ornare ante aliquam, sit amet condimentum ex condimentum.
        </p>

        <p>
          Phasellus laoreet, augue a malesuada laoreet, risus justo ultricies
          tellus, ut posuere nisl leo vel arcu. Vestibulum magna velit, posuere
          hendrerit fringilla nec, vestibulum non lacus. Integer ipsum mauris,
          mollis in leo eu, tempus rhoncus turpis. In ullamcorper justo eget
          ipsum cursus, et tincidunt ligula interdum. Etiam cursus dui ut ante
          gravida, vitae hendrerit massa eleifend. Duis faucibus fringilla sem
          non malesuada. Aliquam vel tincidunt lorem. Nam pulvinar nulla non
          ante luctus fermentum. Vivamus varius justo quis dolor posuere, non
          rhoncus lectus condimentum. Donec venenatis ex nisl, sed pulvinar ex
          interdum placerat. In iaculis justo eu eros fermentum venenatis.
          Maecenas faucibus metus quis molestie interdum. Quisque sagittis,
          lectus tincidunt pulvinar gravida, est dolor sagittis elit, et egestas
          urna risus nec elit. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas.
        </p>

        <p>
          Sed at sem eu massa maximus fermentum. Donec a sagittis risus. Morbi
          malesuada elit elementum, varius risus et, viverra justo. Suspendisse
          sed viverra risus. Pellentesque elementum felis nec purus porttitor,
          ut sodales augue scelerisque. Mauris ornare, libero ut ultricies
          elementum, augue velit vehicula quam, a pharetra massa velit nec
          lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Ut congue nunc eu posuere convallis. Nulla faucibus felis in leo
          cursus, placerat feugiat massa aliquet. Proin tristique purus in purus
          faucibus mattis. Aenean ac nunc leo. Aliquam mi eros, consequat nec
          augue id, elementum finibus magna. Fusce vitae fringilla purus. Donec
          efficitur eros nibh, a eleifend nisl feugiat ut.
        </p>

        <p>
          Morbi commodo quam non bibendum fringilla. Donec eu congue eros. Sed
          sit amet convallis lectus. Suspendisse feugiat orci quis sodales
          porttitor. Suspendisse facilisis sagittis dui, vel pretium dui
          placerat at. Morbi venenatis ipsum ac ipsum vulputate, vel laoreet
          velit luctus. Proin pretium, lorem eleifend varius vulputate, dolor
          neque ultrices augue, quis gravida augue lorem sed libero. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Quisque ut metus ac justo volutpat pellentesque ut
          fermentum arcu. Ut scelerisque mauris nulla, et lacinia nunc hendrerit
          ut. Morbi in nulla ut sem egestas varius non semper lacus. Mauris quis
          ante ut nibh gravida fermentum. Suspendisse pharetra elementum mi
          euismod semper. Sed sit amet aliquam purus. Mauris eu suscipit dolor.
        </p>
        <Link to="/blog">Go to the blog...</Link>
        <Link to="/wishlist">Go to the wishlist...</Link>
      </div>
    );
  }
}

export default App;
