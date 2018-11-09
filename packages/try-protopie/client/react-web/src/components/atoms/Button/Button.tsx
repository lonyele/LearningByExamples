import * as React from "react";

import { Button } from "./styles/Button.style";

export interface IButtonProps {
  content: string;
}

export default class ButtonContainer extends React.Component<
  IButtonProps,
  any
> {
  public render() {
    const { content } = this.props;
    return (
      <Button onClick={() => console.log("버튼", content)}>{content}</Button>
    );
  }
}
