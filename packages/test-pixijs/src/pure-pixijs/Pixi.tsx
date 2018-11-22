import * as PIXI from "pixi.js";
import * as React from "react";

import bunny from "../bunny.jpg";

class Pixi extends React.Component {
  public componentDidMount() {
    // The application will create a renderer using WebGL, if possible,
    // with a fallback to a canvas render. It will also setup the ticker
    // and the root stage PIXI.Container
    const app = new PIXI.Application({ width: 400, height: 400 });

    // The application will create a canvas element for you that you
    // can then insert into the DOM
    const what = document.getElementById("canvasContainer");
    if (what !== null && what !== undefined) {
      what.appendChild(app.view);
    }

    // load the texture we need
    PIXI.loader.add("bunny", bunny).load((loader: any, resources: any) => {
      // This creates a texture from a 'bunny.png' image
      const myBunny = new PIXI.Sprite(resources.bunny.texture);

      // Setup the position of the bunny
      myBunny.x = app.renderer.width / 2;
      myBunny.y = app.renderer.height / 2;

      // Rotate around the center
      myBunny.anchor.x = 0.5;
      myBunny.anchor.y = 0.5;

      // Add the bunny to the scene we are building
      app.stage.addChild(myBunny);

      // Listen for frame updates
      app.ticker.add(() => {
        // each frame we spin the bunny around a bit
        myBunny.rotation += 0.01;
      });
    });
  }
  public render() {
    return <div />;
  }
}

export default Pixi;
