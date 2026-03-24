import React from 'react'

function Help() {
  return (
    <>
      <div className='flex'>

        <div className='flex flex-col'>

            <div className='flex flex-col'>
                <p>Contact Us</p>
                <h1>Ready to Achieve Business Success?</h1>
                <p>Partner with us for expert solutions and support tailored to your needs. Let’s turn your goals into reality together!</p>
            </div>

            <div className='flex-col'>
                <ul>
                    <li>email</li>
                    <li>phone</li>
                    <li>timing</li>
                </ul>
            </div>
        </div>


        {/* Form */}

        <div className='shadow'>
            <h1>Lets talk</h1>
            <div className='flex'>

                <div className='flex flex-col'>
                    <p>First name</p>
                    <input 
                    type="text"
                    placeholder='First name'
                     />
                </div>

                <div className='flex flex-col'>
                    <p>Last name</p>
                    <input 
                    type="text"
                    placeholder='Last name' />
                </div>
            </div>

            <div className='flex flex-col'>
                <p>Email</p>
                <input 
                type="email"
                placeholder='Enter your email'
                 />
            </div>

            <div >
                <p>Phone number</p>
                <input 
                type="number"
                placeholder='Phone Number'
                 />
            </div>

            <div>
                <textarea
                placeholder='Enter your message'
                 ></textarea>
            </div>

            <div>
                <button>Send Message</button>
            </div>
        </div>

      </div>
    </>
  )
}

export default Help
