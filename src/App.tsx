import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

const App = () => {
  const nameList = [
    { firstName: 'Boris', lastName: 'petrenkov' },
    { firstName: 'Dimitri', lastName: 'petrenkov2' },
  ];
  return (
    <div>
      <Heading>Hello TypeScript</Heading>
      <Oscar>
        <Heading>Hello from react child</Heading>
      </Oscar>
      <Greet name="vadim" messageCount={1} isLoggedIn={true} />
      <Greet name="vadim" isLoggedIn={true} />
      <Person firstName="Vadim" lastName="Korzun" age={18} />
      <PersonList names={nameList} />
      <Status status="success" />
    </div>
  );
};

export default App;
