import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { makeRequest } from '../apicalls/customers';
import CustomerCard from './CustomerCard';
import AddCustomerForm from './AddCustomerForm';

export default function Home() {
    /* 
    maintaining states for 
        -customers' data fetched, 
        -toggle between add form component and data list, 
        -card to update 
    */

    let [customers, setCustomers] = useState([]);
    let [toggle, setToggle] = useState(false);
    let [editCard, setEditCard] = useState(null);

    let navigate = useNavigate();

    let logoutHandler = () => {
        localStorage.clear();
        navigate('/login');
    }

    const fetchData = async () => {
        let data = await makeRequest('GET', 'get_customer_list');
        setCustomers(data);
    }

    let btnClickHandler = (e) => {
        // delegating event to optimize event listeners
        if (e.target.id == 'logout') {
            logoutHandler();
        } 
        else if (e.target.id == 'add' || e.target.id == 'cancel') {
            setEditCard(null);
            setToggle(!toggle);
        }
        else if (e.target.id == 'delete-card') {
            // making api call to delete card
            const uuid = e.target.dataset.uuid
            makeRequest('POST', 'delete', uuid)
                .then(res => {
                    console.log(res);
                    fetchData();
                }).catch(err => console.log(err));
        }
        else if (e.target.id == 'edit-card') {
            const uuid = e.target.dataset.uuid
            let customerToUpdate = customers.find(cust => cust.uuid == uuid);
            setEditCard(customerToUpdate);
            setToggle(!toggle);
        }
    }


    useEffect(() => {
        // when component mounts - checking for active session token, redirect to login if no session token found
        if (!localStorage.getItem('token')) {
            navigate('/login');
        }
        else {
            fetchData();
        }
    }, []);

    return (
        <>
            <nav className='p-4 flex justify-end gap-4' onClick={btnClickHandler}>
                <button id='add' className='font-semibold px-3 py-2 bg-sky-900 text-white'>{toggle ? `View List` : `Add Customer`}</button>
                <button id='logout' className='font-semibold px-3 py-2 bg-sky-900 text-white'>Log Out</button>
            </nav>
            <div className="card-cont max-w-md my-16 mx-auto" onClick={btnClickHandler}>
                {
                    !toggle
                        ?
                        customers.map((item) => <CustomerCard item={item} key={item.uuid} />)
                        :
                        <AddCustomerForm
                            fetchData={fetchData}
                            formData={editCard}
                            toggle={toggle}
                            setToggle={setToggle}
                        />
                }
            </div>
        </>
    )
}
