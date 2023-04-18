import logo from './assets/logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Ceci est un test</h1>
      </header>
      <div className="App-images">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget erat diam. Donec ex ipsum, ultricies a magna sit amet, lacinia ullamcorper sem. Sed gravida leo at feugiat venenatis. Sed tempus dignissim orci, a dapibus mi ultricies at. Curabitur lacinia euismod quam ut semper. Nunc semper pulvinar dolor. Pellentesque lectus ligula, porta vel mi ac, condimentum semper urna. Praesent sed varius lorem, iaculis elementum nisi. Nullam vestibulum sapien ac ex ullamcorper, sit amet cursus sem molestie. Maecenas rhoncus sodales felis et faucibus. Donec eget pretium leo. Vivamus sit amet purus ut dolor pharetra sodales feugiat nec libero. Maecenas interdum purus ligula, id mollis odio lacinia a. Suspendisse ex libero, vehicula sed ultrices at, congue at eros.</p>
      </div>
      <div className="App-buttons"></div>
    </div>
  );
};

export default App;
