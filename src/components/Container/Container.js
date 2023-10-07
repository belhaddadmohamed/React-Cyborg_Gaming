import './Container.css'


const Container = (props) => {
    return (
        <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">

            {props.children}

            </div>
          </div>
        </div>
        </div>
    )
}


const Container_8_4 = (props) => {
  return (
    <div class="row">
      <div class="col-lg-8"> {props.component1} </div>
      <div class="col-lg-4"> {props.component2} </div>
    </div>
  )
}


const Carousel = (props) => {
  return (
    <div class="owl-features owl-carousel">
      {props.children}
    </div>
  )
}


export default Container
export {Container_8_4}
export {Carousel}