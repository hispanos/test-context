import React, { useContext } from 'react'
import { AppContext } from '../App'

const ButtonHeader = () => {

  const { setTheme, theme } = useContext(AppContext);

  const handleChange = ({target}) => {
    setTheme(target.value)
  }

  return (
    <select
      className='header__select'
      onChange={handleChange}
      value={theme}
    >
      <option value="">Seleccione Color</option>
      <option value="pink">Rosado</option>
      <option value="blue">Azul</option>
      <option value="green">Verde</option>
    </select>
  )
}

export default ButtonHeader