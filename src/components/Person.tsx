type PersonProps = {
  firstName: string;
  lastName: string;
  age: number;
};

export const Person = ({ firstName, lastName, age }: PersonProps) => {
  return (
    <div>
      <h2>{firstName}</h2>
      <h2>{lastName}</h2>
      <p>Age: {age}</p>
    </div>
  );
};
