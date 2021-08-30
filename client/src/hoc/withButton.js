const withButton = WrappedComponent => (props) => <WrappedComponent {...props} isButton={true}/>

export default withButton