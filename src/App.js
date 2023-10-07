import "./App.css"

// import '../src/assets/css/owl.css'
// import '../src/assets/css/animate.css'
// import "../src/vendor/jquery/jquery.min.js"
// import "../src/vendor/bootstrap/js/bootstrap.min.js"
// import "../src/assets/js/isotope.min.js"
// import "../src/assets/js/owl-carousel.js"
// import "../src/assets/js/tabs.js"
// import "../src/assets/js/popup.js"
// import "../src/assets/js/custom.js"


import { Container } from "./components/index"
import { Header, Footer } from "./sections/index"
import { Home, Profile, Streams } from "./pages/index"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



const App = () => {
    return(
            <div className="container">
                <Router>
                    <Header />

                    <Container>
                        <Routes>
                            <Route path="/" element={<Home/>} />
                            <Route path="profile/" element={<Profile/>} />
                            <Route path="streams/" element={<Streams/>} />
                        </Routes>
                    </Container>

                    <Footer />
                </Router>
            </div>
        )
}

export default App