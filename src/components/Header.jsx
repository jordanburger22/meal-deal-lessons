




function Header(props){
    return (
        <div className="header">
            <h1>Real Meals</h1>
            {props.greeting}
        </div>
    )
}

export default Header