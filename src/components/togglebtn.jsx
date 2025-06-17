import useLocalStorage from 'use-local-storage'

console.log("Toggle button component loaded");

export const ToggleBtn = () => {
    const [isDarkTheme, setDarkTheme] = useLocalStorage("isDarkTheme", false);
    document.documentElement.classList.toggle('dark', isDarkTheme);
    const Toggle = ({handleChange, isChecked}) => {

        return (
            <div className="toggle-btn hidden md:flex">
                <input type="checkbox" id="check" className="toggle" onChange={handleChange} checked={isChecked} />
                <label htmlFor="check">{isChecked ? 'Light Mode' : 'Dark Mode'}</label>
            </div>
        );
    };
    
    return (
        <div className={isDarkTheme ? "dark" : ""}>
            <Toggle isChecked={isDarkTheme} handleChange={() => { 
                console.log("Toggle clicked");
                const changeTheme = !isDarkTheme; setDarkTheme(changeTheme); 
                console.log("Setting theme to:", changeTheme);
                document.documentElement.classList.toggle('dark', changeTheme);}} />
        </div>
    )
}