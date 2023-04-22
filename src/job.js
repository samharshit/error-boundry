export const Job = ({ name }) => {
  if (name === "other") {
    throw new Error("something went wrong");
  }
  return <div>{name}</div>;
};
