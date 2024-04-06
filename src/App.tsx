import "./styles/style.sass";
import "./styles/navbar.sass";
import "./styles/main.sass";
import "./styles/footer.sass";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
    return (
        <>
            <Navbar />
            <Main />
        </>
    );
}

export default App;
