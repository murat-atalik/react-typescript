type PersonListProps = {
  names: {
    firstName: string;
    lastName: string;
  }[];
};
export const PersonList = ({ names }: PersonListProps) => {
  return (
    <div>
      {names.map((name) => (
        <div>
          <h2>Name: {name.firstName}</h2>
          <h2>LastName: {name.lastName}</h2>
        </div>
      ))}
    </div>
  );
};
