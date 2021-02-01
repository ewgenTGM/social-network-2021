const withLogger = (Component) => (props) => {
    return <Component {...props}/>
}

export default withLogger;