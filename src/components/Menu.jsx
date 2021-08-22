import React, { useState, useContext, useRef } from 'react'
import AppContext from '../context/AppContext'
import findLogo from '../assets/static/magnifying-glass.svg'

const Menu = () => {
  const { filterData } = useContext(AppContext)
  const [menuExpanded, setMenuExpanded] = useState(false)
  const locationInput = useRef(null)
  const maxGuestsInput = useRef(null)
  const [filter, setFilter] = useState({maxGuests:'',location:''})
  const handleCloseIcon = () => {
    setMenuExpanded(!menuExpanded)
  }

  const handleGuestChange = () => {
    setFilter({
      ...filter,
      maxGuests: maxGuestsInput.current.value || '',
    })
  }

  const handleLocationChange = () => {
    let filters
    if (locationInput.current.value.includes(',')) {
      filters = locationInput.current.value.split(',')
      setFilter({
        ...filter,
        location: filters[0] || '',
      })
    } else {
      setFilter({
        ...filter,
        location: locationInput.current.value || '',
      })
    }
  }
  const handleClick = () => {
    filterData(filter)
    setMenuExpanded(false)
  }
  return (
    <>
      {menuExpanded ? (
        <div className="menu-expanded">
          <div className="menu-title-wrapper">
            <h3>Edit your search</h3>
            <div className="close-icon" onClick={handleCloseIcon}>
              <img src={findLogo} alt="" />
            </div>
          </div>
          <div className="menu-inputs-container">
            <div className="input-wrapper">
              <span className="input-title">LOCATION</span>

              <input
                className="menu-location"
                type="text"
                ref={locationInput}
                value={filter.location}
                placeholder="Location"
                onChange={handleLocationChange}
              />
            </div>
            <div className="input-wrapper">
            <span className="input-title">GUESTS</span>
            <input
              className="menu-guests"
              ref={maxGuestsInput}
              placeholder="Add Guests"
              value={filter.maxGuests}
              onChange={handleGuestChange}
            />
            </div>
          </div>
          <button onClick={handleClick}>Search</button>
        </div>
      ) : (
        <div className="menu" onClick={handleCloseIcon}>
          <input className="menu-location" placeholder="Location" />
          <input className="menu-guests" placeholder="Add Guests" />
          <div>
            <img src={findLogo} className="menu-icon-find" />
          </div>
        </div>
      )}
    </>
  )
}

export default Menu
