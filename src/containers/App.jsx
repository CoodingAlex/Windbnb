import React from 'react'
import Header from '../components/Header'
import '../assets/styles/Vars.scss'
import '../assets/styles/Global.scss'
import '../assets/styles/Media.scss'
import AppContext from '../context/AppContext'
import CardsContainer from '../components/CardsContainer'
import Card from '../components/Card'
import useFilter from '../hooks/useFilter'

const App = () => {
	const { state,filterData } = useFilter()
	return(
		<AppContext.Provider value={{state,filterData}}>
			<Header/>
			<CardsContainer>
			
			</CardsContainer>
		</AppContext.Provider>
	)
}
export default App
