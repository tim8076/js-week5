export default function CardSpot(props) {
  return (
    <div className="card-travel card rounded-sm shadow-main position-relative h-100">
      <img src={props.imgUrl}
        className="card-img-top object-fit-cover"
        alt="travel-1" />
      <div className="card-body p-5 position-relative d-flex flex-column">
        <h2 className='fs-2 text-primary pb-1 border-bottom border-2 border-primary mb-4'>
          {props.name}
        </h2>
        <p className='mb-5'>
          {props.description}
        </p>
        <div className="d-flex justify-content-between align-items-center text-primary
          fw-medium mt-auto">
          <p>
            <i className="bi bi-exclamation-circle-fill me-1"></i>
            剩下最後 {props.group} 組
          </p>
          <p className='d-flex align-items-center'>
            TWD
            <span className='ms-1 fs-1'>
              {`$${props.price}`}
            </span>
          </p>
        </div>
        <div className="card-travel__rate bg-primary text-light text-center">
          {props.rate}
        </div>
      </div>
      <div className="card-travel__area bg-primary-100 text-light">
        {props.area}
      </div>
    </div>
  )
}
