import React from 'react';
import { Masonry } from "gestalt";
import 'gestalt/dist/gestalt.css';
const Item = props => {
  const { title, content, height1 } = props.data;
  console.log("asdfasdf", props);
  return (
    <div style={{ border: "1px solid black", height: `${height1}` }}>
      <p>what???? 어떻게하냐</p>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};

const data2 = [
  { title: "what...1", content: "up????", height1: "120px" },
  { title: "what...2", content: "up????", height1: "200px" },
  { title: "what...3", content: "up????", height1: "300px" },
  { title: "what...4", content: "up????", height1: "150px" },
  { title: "what...5", content: "up????", height1: "250px" },
  { title: "what...6", content: "up????", height1: "250px" },
  { title: "what...7", content: "up????", height1: "250px" },
  { title: "what...8", content: "up????", height1: "120px" },
  { title: "what...9", content: "up????", height1: "200px" },
  { title: "what...10", content: "up????", height1: "300px" },
  { title: "what...11", content: "up????", height1: "150px" },
  { title: "what...12", content: "up????", height1: "250px" },
  { title: "what...13", content: "up????", height1: "250px" },
  { title: "what...14", content: "up????", height1: "250px" },
  { title: "what...15", content: "up????", height1: "250px" },
  { title: "what...16", content: "up????", height1: "250px" },
  { title: "what...17", content: "up????", height1: "150px" },
  { title: "what...18", content: "up????", height1: "250px" },
  { title: "what...19", content: "up????", height1: "250px" },
  { title: "what...20", content: "up????", height1: "250px" },
  { title: "what...21", content: "up????", height1: "250px" },
  { title: "what...22", content: "up????", height1: "250px" }
];

export default class Gestalt extends React.Component {
  loadItems = from => {
    console.log("???", from);
  };
  whatthe = () => {
    console.log("whatthe hell")
  }
  render() {
    return (
      <div>
        <Masonry
          comp={Item}
          items={data2}
          loadItems={this.whatthe}
        />
      </div>
    );
  }
}