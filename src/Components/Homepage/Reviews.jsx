import React from 'react'

function Reviews() {
  return (
    <>
      <div className='flex'>
        {/* left side */}
        <div>
            <div>
                <p>Client reviews</p>
            </div>
            <div>
                <h1>Driving digital revenue for
                    our 50+ satisfied
                    customers</h1>
            </div>

            <div className='flex'>
                <div>
                    {/* icon */}
                </div>

                <div>
                    <h1>60%</h1>
                </div>
                <div>
                    <p>
                        Average Traffic
                        Increase for Clients
                    </p>
                </div>
            </div>
        </div>

            {/* Right Side */}
        <div>
            <div>
                <p></p>
            </div>
            <div className='flex'>
                <div className='flex flex-col'>
                    <div><h3>Sujan Shrestha</h3></div>
                    <div><p>Engineer</p></div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex'>
                        <h4>4.7</h4>
                        {/* stars icon */}
                    </div>

                    <div>
                        <p>50+ Client Reviews</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Reviews
