// function Zposition({ Zposition, cargos, setCargos }) {
//   return <td>{Zposition}</td>
// }
// export default Zposition

import React, { useState, useRef } from 'react'

function Zposition({ uuid, initialZposition, cargos, setCargos }) {
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
          cargo.uuid === uuid
            ? { ...cargo, Zposition: Number(newValue) }
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
          defaultValue={initialZposition}
          onKeyDown={handleKeyDown}
          onBlur={() => setEditing({ id: null })}
        />
      ) : (
        initialZposition
      )}
    </td>
  )
}

export default Zposition
