import React, {useContext} from 'react'
import { AppContext } from '../App';
import ButtonHeader from './ButtonHeader'

const Header = () => {

    const {theme} = useContext(AppContext);

    return (
        <div className={`header header--${theme}`}>
            <h1>App Context</h1>
            <ButtonHeader />
        </div>
    )
}

export default Header