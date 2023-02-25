import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
type Props = {}

const Preloader = (props: Props) => {
  return (
    <div className="preloader">
  <div className="loader">
    <div className="spinner">
      <div className="spinner-container">
        <div className="spinner-rotator">
          <div className="spinner-left">
            <div className="spinner-circle" />
          </div>
          <div className="spinner-right">
            <div className="spinner-circle" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Preloader