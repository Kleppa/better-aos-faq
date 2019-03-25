import React from 'react'
import DarkModeToggle from './dark-mode-toggle';
import SearchInputField from './input-field'
const Header = () => {
    return (
        <header>
            <div>
                <DarkModeToggle />
                <h3>Age Of Sigmar </h3>
                <SearchInputField />
            </div>
        </header>
    )
}

export default Header
