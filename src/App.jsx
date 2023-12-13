import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import GlobalStyles from "./styles/GlobalStyle";
import { DownloadPage, FramePage, PrintPage, SnapPage, StartPage } from "./pages";

function App() {
    const [result, setResult] = useState([]);

    return (
        <div className="App">
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/frame" element={<FramePage />} />
                <Route path="/snap" element={<SnapPage setResult={setResult} />} />
                <Route path="/print" element={<PrintPage result={result} />} />
                <Route path="/download/:imgUrl/*" element={<DownloadPage />} />
                <Route path="/*" element={<StartPage />} />
            </Routes>
        </div>
    );
}

export default App;
