import type React from "react";

type childNode = {
  name: string;
  children?: React.ReactNode;
};

const ChildNodes = (props: childNode) => {
  return (
    <div>
      <h1>{props.name}</h1>
      {props.children ?? <p>No children</p>}
    </div>
  );
};

interface RequiredChildNode extends childNode {
  name: string;
  children: React.ReactNode;
}

const RequiredChildNodes = (props: RequiredChildNode) => {
  return (
    <div>
      <h1>{props.name}</h1> {props.children}
    </div>
  );
};

export { ChildNodes, RequiredChildNodes };
export default ChildNodes;
