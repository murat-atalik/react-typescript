type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};
export const Greet = ({ name, messageCount = 0, isLoggedIn }: GreetProps) => {
  return (
    <div>
      {isLoggedIn ? (
        <h2>
          Hello friend {name}. You have {messageCount} unread message
        </h2>
      ) : (
        <h2>Hello guest</h2>
      )}
    </div>
  );
};
