
function Frame({resource, change}) {
    return(
        <div>
            <iframe title="Welcome to The Challenge" src={resource} onLoad={change} width="100%" height="250px"></iframe>
            {/* <button onClick={change}>Change Source</button> */}
        </div>
    )
}

export default Frame;