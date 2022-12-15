const Error = (props) => {
    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1em", color: "rgba(0, 0, 0, 0.75)", backgroundColor: "rgba(255, 153, 153, 0.75)", border: "1px solid rgba(255, 51, 51, 0.75)"}}>
            <b style={{paddingLeft: "2.5em", fontSize: "1.05em"}}>{props.error.message}</b>
            <button className="btn" onClick={() => props.setError({...props.error, display: false })}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default Error;