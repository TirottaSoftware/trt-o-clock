import './SpecCard.css'

function SpecCard({ spec, value }) {
    return (
        <div className='spec-card'>
            <h3>{spec}</h3>
            <p>{value}{spec === "Weight" ? "g" : ""}</p>
        </div>
    )
}

export default SpecCard