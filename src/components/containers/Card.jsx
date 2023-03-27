const Card = ({ children }) => {
  return (
    <div className="border-solid p-8 rounded-3xl w-full border bg-white shadow-sm">
      {children}
    </div>
  )
}

export default Card
