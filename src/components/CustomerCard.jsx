import React from 'react'

export default function CustomerCard({item}) {
  return (
    <div id={item.uuid} className='customer-card flex mt-4 justify-center items-center flex-col border-2 px-8 py-6 relative'>
      <div className='absolute top-1 right-1'>
        <button id='edit-card' data-uuid={item.uuid} className=' text-lg mx-1 material-symbols-rounded' >edit</button>
        <button id='delete-card' data-uuid={item.uuid} className=' text-lg mx-1 material-symbols-rounded'>delete</button>
      </div>
      <p className="name font-medium text-4xl text-sky-900">{item.first_name} {item.last_name}</p>
      <div className="card grid grid-cols-2 grid-rows-1 mt-2">
        <div className="card-left text-right break-words px-3 py-3 border-r-sky-900 border-r-2">{item.email}<br />{item.phone}<br />{item.city}</div>
        <div className="card-right text-left break-words px-3 py-3">{item.address}<br />{item.street}<br />{item.state}</div>
      </div>
    </div>
  )
}
