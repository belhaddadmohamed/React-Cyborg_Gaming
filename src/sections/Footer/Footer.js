import './Footer.css'

// import {jquery} from '../../vendor/jquery/jquery.min.js'
// import {bootstrap} from "../../vendor/bootstrap/js/bootstrap.min.js"
// import {isotope} from "../../assets/js/isotope.min.js"
// import {carousel} from "../../assets/js/owl-carousel.js"
// import {tabs} from "../../assets/js/tabs.js"
// import {popup} from "../../assets/js/popup.js"
// import {custom} from "../../assets/js/custom.js"

const Footer = () => {
    return (
        <>
            <footer>
                <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                    <p>Copyright © 2036 <a href="#">Cyborg Gaming</a> Company. All rights reserved. 
                    
                    <br/>Design: <a href="https://templatemo.com" target="_blank" title="free CSS templates">TemplateMo</a></p>
                    </div>
                </div>
                </div>
            </footer>


            {/* Scripts */}
            {/* Bootstrap core JavaScript */}
            <script src="../../vendor/jquery/jquery.min.js"></script>
            <script src="../../vendor/bootstrap/js/bootstrap.min.js"></script>

            <script src="../../assets/js/isotope.min.js"></script>
            <script src="../../assets/js/owl-carousel.js"></script>
            <script src="../../assets/js/tabs.js"></script>
            <script src="../../assets/js/popup.js"></script>
            <script src="../../assets/js/custom.js"></script>
        </>
    )
}

export default Footer