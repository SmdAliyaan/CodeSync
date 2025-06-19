import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import{Routes,Route} from 'react-router-dom';
import { EditorView } from 'codemirror';

function App() {
  return (
    <>
    <Routes>
      <Route>
            <Route path="/" element={<Home />} />
      {/* <Route path="/editor/:roomId" element={<EditorPage />} /> */}
      </Route>
    </Routes>
    </>
  );
}

export default App;
