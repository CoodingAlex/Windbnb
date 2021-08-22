import React, { useContext, useEffect } from 'react'
import AppContext from '../context/AppContext'
import Card from '../components/Card'
import '../assets/styles/Card.scss'

const CardsContainer = ({  }) => {
  const { state, filterData } = useContext(AppContext)
  const { filteredData } = state
  useEffect(() => {
		filterData({})
  }, [])
  return (
    <div className="cards-container">
      {filteredData.map((item) => (
       <Card {...item} key={item.title}/>
          ))}
    </div>
  )
}


export default CardsContainer
