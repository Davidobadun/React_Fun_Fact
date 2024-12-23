import { createRoot } from "react-dom/client"
import Navbar from "./components/Navbar.jsx"
import Main from "./components/Main.jsx"

const root = createRoot(document.getElementById("root"))

function App() {
    return (
        root.render(
            <Page />
        )
    )
}
export default App

function Page() {
    return (
        <>
            <Navbar />
            <Main />
        </>
    )
}