import React, { useState, useRef } from 'react'

function Xposition({ uuid, Xposition: initialXposition, cargos, setCargos }) {
  const [editing, setEditing] = useState({ id: null, field: null })
  const inputRef = useRef()

  const startEdit = (id, field) => {
    setEditing({ id, field })
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const newValue = e.target.value
      if (newValue < 0) {
        alert('введенные размеры не могут быть меньше 0')
        return
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
    <td onClick={() => startEdit(uuid, 'Xpositionn')}>
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
