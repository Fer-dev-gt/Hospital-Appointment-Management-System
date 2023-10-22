import '../App.css';
import { HopitalProvider } from '../Context';
import { AppUI } from './AppUI';

function App() {
  return (
    <HopitalProvider>
      <AppUI />
    </HopitalProvider>
  );
}

export default App;
