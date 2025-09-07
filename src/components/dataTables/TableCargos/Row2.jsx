// Row.jsx
export function Row({ children, className = '' }) {
  return <div className={`row ${className}`}>{children}</div>
}

export function Cell({ children, className = '', flex = 1 }) {
  return (
    <div className={`cell ${className}`} style={{ flex }}>
      {children}
    </div>
  )
}
