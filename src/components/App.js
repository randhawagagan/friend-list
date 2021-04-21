import { Provider } from "react-redux";
import store from "./../store/store";

import "./App.css";

import List from "./List/List";

function App() {
    return (
        <Provider store={store}>
            <div className="App-container">
                <div className="App">
                    <List />
                </div>
            </div>
        </Provider>
    );
}

export default App;
