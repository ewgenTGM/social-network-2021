const withLogger = (Component) => (props) => {
    console.log('abc cba')
    return <Component {...props}/>
}

export default withLogger;