import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const getLocalStorage = () => {
    const list = localStorage.getItem('list')

    if (list) {
      return JSON.parse(list)
    } else {
      return []
    }
  }
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      // show alert
      showAlert(true, 'please enter item name', 'danger')
    } else if (name && isEditing) {
      // edit dealing
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }
          }
          return item
        })
      )
      showAlert(true, 'item changed', 'success')
      setName('')
      setIsEditing(false)
      setEditID(null)
    } else {
      // show alert
      showAlert(true, 'item added', 'success')
      // add item to the list
      const newItem = { id: new Date().getTime().toString(), title: name }

      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type })
  }
  const clearList = () => {
    showAlert(true, 'Empty list', 'success')
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true, 'Item removed', 'success')
    const newList = list.filter((item) => {
      return id !== item.id
    })

    setList(newList)
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setName(specificItem.title)
    setEditID(id)
    setIsEditing(true)
  }
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            value={name}
            className='grocery'
            onChange={(e) => setName(e.target.value)}
            placeholder='e. g. eggs'
          />

          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'add'}
          </button>
        </div>
      </form>

      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            Clear items
          </button>
        </div>
      )}
    </section>
  )
}

export default App
