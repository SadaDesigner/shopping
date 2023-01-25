const LoadingSpin = (props) => {
    return <div className={`spinner-border ${props.spintype}`} role="status">
    <span className="visually-hidden">Loading...</span>
    </div>
}
export default LoadingSpin;