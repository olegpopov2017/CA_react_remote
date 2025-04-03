import React, { useState, useRef } from 'react'

function Xwidth({ uuid, initialXwidth, cargos, setCargos }) {
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
        alert('введеннное значение должно быть числовым')
        return
      }
      if (newValue < 0) {
        alert('введенное значение не может быть меньше 0')
        return
      }
      setCargos((prevCargos) =>
        prevCargos.map((cargo) =>
          cargo.uuid === uuid ? { ...cargo, Xwidth: Number(newValue) } : cargo
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
          defaultValue={initialXwidth}
          onKeyDown={handleKeyDown}
          onBlur={() => setEditing({ id: null })}
        />
      ) : (
        initialXwidth
      )}
    </td>
  )
}

export default Xwidth
