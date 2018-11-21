import { observer } from "mobx-react";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import * as React from "react";

export const TestComplexType = observer((props: any) => {
  // const changeContent = () => {

  // }
  return (
    <div>
      <h3>Test Title</h3>
      <button onClick={() => props.store.addOne()}>Add Test One</button>
      <button onClick={() => props.store.addTwo()}>Add Test Two</button>
      {props.store.tests.map((test: any) => (
        <div key={test.id} style={{ border: "1px solid black" }}>
          <TextField
            value={test.content}
            onChange={(e: any) => test.changeContent(e.target.value)}
          />
        </div>
      ))}
    </div>
  );
});
