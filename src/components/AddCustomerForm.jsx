import React, { useRef } from 'react'
import { makeRequest } from '../apicalls/customers';

export default function AddCustomerForm({fetchData,formData,toggle,setToggle}) {

    let handleFromSubmit = (e) => {
        e.preventDefault();
        // setting uuid and cmd parameters conditionally
        // if formData is empty, then create else update
        let uuid = formData ? formData.uuid : null;
        let cmd = formData ? 'update' : 'create';

        if(!formData) formData = {};
        for(let i of e.target){
            if(i.name){
                formData[i.name] = i.value;
            }
        }
        
        //making api call to create/update customer details
        makeRequest('post', cmd, uuid, formData)
            .then((res) => {
                console.log(res);
                fetchData();
            })
            .then(() => setToggle(!toggle))
            .catch((err) => console.log(err));
    }

    return (
        <form onSubmit={handleFromSubmit}>
            <div className="space-y-12">

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                    <div  className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
                                First Name *
                            </label>
                            <div className="">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    autoComplete="given-name"
                                    required
                                    defaultValue={formData ? formData.first_name : ''}
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
                                Last Name *
                            </label>
                            <div className="">
                                <input
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    autoComplete="family-name"
                                    required
                                    defaultValue={formData ? formData.last_name : ''}
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    defaultValue={formData ? formData.email : ''}
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                                Phone
                            </label>
                            <div className="">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="phone"
                                    autoComplete="phone"
                                    defaultValue={formData ? formData.phone : ''}
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                                Address
                            </label>
                            <div className="">
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    autoComplete="address"
                                    defaultValue={formData ? formData.address : ''}
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="street" className="block text-sm font-medium leading-6 text-gray-900">
                                Street
                            </label>
                            <div className="">
                                <input
                                    type="text"
                                    name="street"
                                    id="street"
                                    autoComplete="street"
                                    defaultValue={formData ? formData.street : ''}
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3 sm:col-start-1">
                            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                City
                            </label>
                            <div className="">
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    autoComplete="address-level2"
                                    defaultValue={formData ? formData.city : ''}
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">
                                State / Province
                            </label>
                            <div className="">
                                <input
                                    type="text"
                                    name="state"
                                    id="state"
                                    autoComplete="address-level1"
                                    defaultValue={formData ? formData.state : ''}
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button id='cancel' type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    id='save'
                    type="submit"
                    className="rounded-md bg-sky-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    )
}