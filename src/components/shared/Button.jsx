function Button(props) {
    return (
        <button type={props.type} disabled ={props.isDisabled} className={`btn btn-${props.version}`}>
            {props.children}
        </button>
    )
}

Button.defaultProps = {
    type:'button',
    isDisabled:false,
    version:'primary'
}

export default Button
