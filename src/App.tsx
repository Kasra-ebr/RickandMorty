import "./App.css";
import CharacterDetails from "./Component/CharacterDetails";
import CoinList from "./Component/CharacterList";
import { CharacterContextProvider } from "./Component/Hook/CharacterContext";
import Layout from "./Component/Layout/Layout";
import Favourites from "./Component/Navbar/Favourites";
import Navbar from "./Component/Navbar/Navbar";


function App() {
  return (
    <>
      <CharacterContextProvider>
        <Layout>
          <Navbar>
            <Favourites />
          </Navbar>
          <div className="main-content">
            <CoinList />
            <CharacterDetails />
          </div>
        </Layout>
      </CharacterContextProvider>
    </>
  );
}

export default App;

