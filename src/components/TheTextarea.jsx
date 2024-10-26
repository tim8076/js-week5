
export default function TheTextarea({ id, labelName, type, name, placeholder, handleInputChange, value }) {
  return (
    <div className="mb-6 d-flex flex-column flex-md-row align-items-md-center">
      <label htmlFor={id}
        className="form-label text-primary flex-shrink-0 me-6 me-lg-r3 mb-3 mb-md-0">
        { labelName }
      </label>
      <textarea
        className="form-control bg-gray-200 py-2 px-3 border-0 rounded-0 border-bottom border-primary border-2 resize-none"
        rows="5"
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}/>
    </div>
  )
}
