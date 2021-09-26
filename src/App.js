import './App.css';
import Header from "./component/Header.js"
import Container from './component/Container'
import Footer from './component/Footer'



function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="app_body">
      <Container></Container>
      </div>
      <div className="app_footer">
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
