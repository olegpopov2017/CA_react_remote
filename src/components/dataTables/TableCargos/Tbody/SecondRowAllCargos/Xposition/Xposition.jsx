import React, { useState, useRef } from 'react'

function Xposition({ uuid, initialXposition, cargos, setCargos }) {
  const [editing, setEditing] = useState({ id: null })
  const inputRef = useRef()

  const startEdit = (id) => {
    setEditing({ id })
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const newValue = e.target.value
      if (isNaN(Number(newValue))) {
        return alert('введеннное значение должно быть числовым')
      }
      if (newValue < 0) {
        return alert('введенное значение не может быть меньше 0')
      }
      setCargos((prevCargos) =>
        prevCargos.map((cargo) =>
          cargo.uuid === uuid
            ? { ...cargo, Xposition: Number(newValue) }
            : cargo
        )
      )
      setEditing({ id: null })
      console.log(cargos)
    } else if (e.key === 'Escape') {
      setEditing({ id: null })
    }
  }

  return (
    <td onClick={() => startEdit(uuid)}>
      {editing.id === uuid ? (
        <input
          ref={inputRef}
          defaultValue={initialXposition}
          onKeyDown={handleKeyDown}
          onBlur={() => setEditing({ id: null })}
        />
      ) : (
        initialXposition
      )}
    </td>
  )
}

export default Xposition
