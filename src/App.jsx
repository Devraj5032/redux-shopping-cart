import { Provider } from "react-redux";
import Categories from "./components/Categories";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Categories />
      <Products />
    </Provider>
  );
}

export default App;
