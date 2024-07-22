import logo from './logo.svg';
import './App.css';
import { testGet, testKakaoLogin, testPost } from './api/api';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const testFetchData = async () => {
      const testGetData = await testGet();
      console.log(testGetData);

      const testGetKakaoLoginData = await testKakaoLogin();
      console.log(testGetKakaoLoginData);

      const testPostData = await testPost();
      console.log(testPostData);
    }
    testFetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
