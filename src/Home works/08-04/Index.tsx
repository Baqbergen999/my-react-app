import { LanguageProvider } from './LanguageProvider';
import Test from './App';

function App() {
  return (
    <LanguageProvider>
      <div>
        <Test />
      </div>
    </LanguageProvider>
  );
}

export default App;
