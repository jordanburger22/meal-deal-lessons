




function Header(props){

    const {darkMode, toggleDarkMode} = props

    return (
        <div className="header">
            <h1>Real Meals</h1>
            <button onClick={toggleDarkMode}>{darkMode} Mode</button>
        </div>
    )
}

export default Header