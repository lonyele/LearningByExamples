import { observer } from "mobx-react";
import * as React from "react";

export const AnotherTest = observer((props: any) => {
  console.log("what", props.tests);
  return (
    <div>
      <h3>AnotherTest</h3>
      {props.store.tests.map((test: any) => (
        <div key={test.id}>{test.content}</div>
      ))}
      {/* <button onClick={}>Add Test</button> */}
    </div>
  );
});
