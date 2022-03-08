import './App.css';
import './styles/css/crowdfundingPage.css';
import { CallToAction } from './components/CallToAction';
import { Header } from './components/Header';
import { Completed } from './components/Completed';
import { Counter } from './components/Counter';
import { About } from './components/About';
import { CrowdfundContextProvider } from './contexts/CrowdfundContext';
import { ModalContextProvider } from './contexts/ModalContext';
import { Modal } from './components/Modal';
import { useState } from 'react';

function App() {
  const [popup, setPopup] = useState(0);
  const [bookmark, setBookmark] = useState(false);

  return (
    <div className="App">
      <CrowdfundContextProvider>
        <ModalContextProvider>
          <Header />
          <CallToAction setPopup={setPopup} bookmark={bookmark} setBookmark={setBookmark}/>
          <Counter />
          <About setPopup={setPopup} />
          {popup && <div className="overlay"></div>}
          {popup===1 && <Modal setPopup={setPopup}/>}
          {popup===2 && <Completed setPopup={setPopup}/>}
        </ModalContextProvider>
      </CrowdfundContextProvider>

    </div>
  );
}

export default App;
