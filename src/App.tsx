import "./styles/main.sass"
import "./styles/reset.sass"
import { useState } from 'react'
import Header from "./components/Header/Header";
import {Pioneer} from "./utils/types";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import {Route, Routes, Navigate} from 'react-router-dom';
import PioneerPage from "./pages/PioneerPage/PioneerPage";
import PioneersList from "./pages/PioneersList/PioneersList";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { HashRouter as Router } from "react-router-dom";

function App() {

    const [selectedPioneer, setSelectedPioneer] = useState<Pioneer | undefined>(undefined)

    return (
        <Router basename="/geohistory">

            <div className="App">

                <div className="wrapper">

                    <Header />

                    <div className="content-wrapper">

                        <Breadcrumbs selectedPioneer={selectedPioneer} setSelectedPioneer={setSelectedPioneer}/>

                        <Routes>

                            <Route path="/" element={<Navigate to="/pioneers" replace />} />

                            <Route path="/profile" element={<ProfilePage />} />

                            <Route path="/pioneers" element={<PioneersList />} />

                            <Route path="/pioneers/:id" element={<PioneerPage selectedPioneer={selectedPioneer} setSelectedPioneer={setSelectedPioneer} />} />

                        </Routes>

                    </div>

                </div>

            </div>

        </Router>
    )
}

export default App
