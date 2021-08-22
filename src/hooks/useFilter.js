import React, { useState } from 'react'
import initialState from '../initialData'

const useFilter = () => {
  const [state, setState] = useState(initialState)

  const filterData = (filter) => {
    let filteredData = state.stays
    if (filter['location']) {
      filteredData = filteredData.filter(
        (item) =>
          item.country
            .toLowerCase()
            .includes(filter['location'].toLowerCase()) ||
          item.city.toLowerCase().includes(filter['location'].toLowerCase())
      )
    }
    if (filter['maxGuests']) {
      filteredData = filteredData.filter(
        (item) => item.maxGuests == filter['maxGuests']
      )
    }
    setState({
      ...state,
      filteredData: filteredData,
    })
  }
  return {
    state,
    filterData,
  }
}

export default useFilter
