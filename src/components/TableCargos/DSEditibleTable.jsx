import React, { useState, useRef } from 'react'

const EditableTable = () => {
  // Исходные данные
  const [data, setData] = useState([
    { id: 1, name: 'Алексей', age: 28, department: 'Разработка' },
    { id: 2, name: 'Мария', age: 32, department: 'Дизайн' },
    { id: 3, name: 'Иван', age: 25, department: 'Маркетинг' },
  ])

  const [editing, setEditing] = useState({ id: null, field: null })
  const inputRef = useRef()

  // Начать редактирование
  const startEdit = (id, field, value) => {
    setEditing({ id, field })
    setTimeout(() => inputRef.current?.focus(), 0) // Автофокус после рендера
  }

  // Сохранить изменения
  const saveEdit = (e, id) => {
    if (e.key === 'Enter') {
      const field = editing.field
      const newValue = e.target.value

      setData(
        data.map((item) =>
          item.id === id
            ? { ...item, [field]: field === 'age' ? +newValue : newValue }
            : item
        )
      )
      setEditing({ id: null, field: null })
    }
  }

  // Отмена по Esc
  const cancelEdit = (e) => {
    if (e.key === 'Escape') {
      setEditing({ id: null, field: null })
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Отдел</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td onClick={() => startEdit(item.id, 'name', item.name)}>
              {editing.id === item.id && editing.field === 'name' ? (
                <input
                  ref={inputRef}
                  defaultValue={item.name}
                  onKeyDown={(e) => {
                    saveEdit(e, item.id)
                    cancelEdit(e)
                  }}
                />
              ) : (
                item.name
              )}
            </td>

            <td
              style={styles.td}
              onClick={() => startEdit(item.id, 'age', item.age)}
            >
              {editing.id === item.id && editing.field === 'age' ? (
                <input
                  ref={inputRef}
                  type="number"
                  defaultValue={item.age}
                  onKeyDown={(e) => {
                    saveEdit(e, item.id)
                    cancelEdit(e)
                  }}
                  style={styles.input}
                />
              ) : (
                `${item.age} лет`
              )}
            </td>
            <td
              style={styles.td}
              onClick={() => startEdit(item.id, 'department', item.department)}
            >
              {editing.id === item.id && editing.field === 'department' ? (
                <select
                  ref={inputRef}
                  defaultValue={item.department}
                  onKeyDown={(e) => {
                    saveEdit(e, item.id)
                    cancelEdit(e)
                  }}
                  style={styles.input}
                >
                  <option value="Разработка">Разработка</option>
                  <option value="Дизайн">Дизайн</option>
                  <option value="Маркетинг">Маркетинг</option>
                </select>
              ) : (
                item.department
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

// Стили
const styles = {
  th: {
    padding: '12px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  },
  td: {
    padding: '12px',
    borderBottom: '1px solid #ddd',
    cursor: 'pointer',
    position: 'relative',
  },
  tr: {
    ':hover': {
      backgroundColor: '#f9f9f9',
    },
  },
  input: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    padding: '0 12px',
    border: '2px solid #2196F3',
    boxSizing: 'border-box',
    outline: 'none',
  },
}

export default EditableTable
