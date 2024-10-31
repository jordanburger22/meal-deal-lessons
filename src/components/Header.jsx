




function Header(props) {

    const { darkMode, toggleDarkMode } = props

    return (
        <div className="header">
            <h1>Real Meals</h1>
            <label>
                <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
                Dark Mode
            </label>
        </div>
    )
}

export default Header