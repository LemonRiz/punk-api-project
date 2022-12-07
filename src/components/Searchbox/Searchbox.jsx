import {React} from 'react'

const Searchbox = ({label, searchTerm, handleInput}) => {
  return (
    <input
    type = "text"
    name={label}
    value={searchTerm}
    onInput={handleInput}
    className="navbar__searchbox"
    />
  )
}

export default Searchbox