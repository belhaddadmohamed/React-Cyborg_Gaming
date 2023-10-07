import './SectionHeader.css'


const SectionHeader = (props) => {
  return (
    <div className="col-lg-12">
        <div className="heading-section">
            <h4><em>{props.title1}</em> {props.title2}</h4>
        </div>

        {props.children}
    </div>
  )
}

export default SectionHeader