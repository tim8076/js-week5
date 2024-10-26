
export default function TheInput({ id, labelName, type, name, placeholder, min, max, value, handleInputChange }) {
  return (
    <div className="mb-4 d-flex flex-column flex-md-row align-items-md-center">
      <label htmlFor={id}
        className="form-label text-primary flex-shrink-0 me-6 me-lg-r3 mb-3 mb-md-0">
        { labelName }
      </label>
      <input type={type}
        className="form-control bg-gray-200 py-2 px-3 border-0 rounded-0 border-bottom border-primary border-2"
        id={id}
        name={name}
        placeholder={placeholder}
        min={min}
        max={max}
        value={value}
        onChange={handleInputChange}/>
    </div>
  )
}
