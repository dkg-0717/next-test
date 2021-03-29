import React, { useState } from 'react'
import Modal from '@/components/Modal/Modal'

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const handleModal = () => {
    setShowModal(true)
  }
  return (
    <>
      <h1>Este es el home</h1>
      <button onClick={handleModal}>Mostrar Modal</button>
      <Modal show={showModal} closeModal={setShowModal} />
    </>
  )
}

export default Home
