import React, { useState, useEffect } from 'react'
import Modal from '@/components/Modal/Modal'

const Home = () => {

  const [showModal, setShowModal] = useState(false)
  const [productList, setProductList] = useState([])

  useEffect(() => {
    fetch('/api/avo')
      .then(resp => resp.json())
      .then(({ entries }) => setProductList(entries))
  }, [])

  const handleModal = () => {
    setShowModal(true)
  }

  console.log(productList)

  return (
    <>
      <h1>Este es el home</h1>
      <pre>{JSON.stringify(productList)}</pre>
      {productList.map(product => {
        <div>{product}</div>
      })}
      <ul>
        {productList.map(product => {
          <li>{product}</li>
        })}
      </ul>
      <button className="btn btn-outline-primary" onClick={handleModal}>Mostrar Modal</button>
      <Modal
        show={showModal}
        closeModal={setShowModal}
        title="Este es el titulo del modal"
        msg="Puedes crear este componente para todo tu proyecto y solo enviarle lo que necesitas."
      />
    </>
  )
}

export default Home
