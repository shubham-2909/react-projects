import React, { useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false)
  const [showSideBar, setShowSideBar] = useState(false)
  const openModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }

  const openSideBar = () => {
    setShowSideBar(true)
  }
  const closeSideBar = () => {
    setShowSideBar(false)
  }
  return (
    <AppContext.Provider
      value={{
        showModal,
        showSideBar,
        openModal,
        closeModal,
        openSideBar,
        closeSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
