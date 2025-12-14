type defaultParams = { name?: string; age?: number };

const DefPar = ({ name = "Santosh", age = 40 }: defaultParams) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

const DefPar2 = (props: defaultParams) => {
  const name = props.name ?? "Santosh";
  const age = props.age ?? 39;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export { DefPar, DefPar2 };
export default DefPar;
