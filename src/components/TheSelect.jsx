
export default function TheSelect({ id, labelName, name, placeholder, options, handleInputChange, value }) {
  return (
    <div className="mb-4 d-flex flex-column flex-md-row align-items-md-center">
      <label htmlFor={id}
        className="form-label text-primary flex-shrink-0 me-6 me-lg-r3 mb-3 mb-md-0">
        { labelName }
      </label>
      <select className="form-select bg-gray-200 py-2 px-3 border-0 rounded-0 border-bottom  border-primary border-2"
        name={name}
        id={id}
        value={value}
        onChange={handleInputChange}>
        <option value="" disabled>{ placeholder }</option>
        {
          options.map(option => {
            return <option value={option} key={option}>{option}</option>
          })
        }
      </select>
    </div>
  )
}
