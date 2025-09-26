
// import React from 'react'
import React, {use} from "react";
import './Customer.css'
import Ellipse from '../../assets/Ellipse.png'

export default function Customer({customerPromise}) {

    const customerData = use(customerPromise)
    console.log(customerData);

  return (
    <div className="bg-color">
        <div className="customer-area container">
           
            <div className="customer-tickets">
                <h3>Customer Tickets</h3>
                <div className="card-grid">
                    {
                        customerData.map(customer =><div className="customer-card">
                        <div className="title-btn">
                            <h5>{customer.title}</h5>
                            <button><img src={Ellipse} alt="" />{customer.status}</button>
                            {/* <button><span>.</span>Open</button> */}
                        </div>
                        <p className="card-discrip">{customer.description}</p>
                        <div className="card-bottom-content">
                            <div className="id-priority">
                                <p className="id-no">#{customer.id}</p>
                                <p className="priority">{customer.priority}</p>
                            </div>
                            <div className="name-date">
                                <p className="name">{customer.customer}</p>
                                <p className="clender">{customer.create}</p>
                            </div>

                        </div>
                    </div> )
                    }

                 </div>
                
            </div>
            <div className="task-area">
                <div className="task-area">
                    <h3>Task Status</h3>
                    <div className="task-content">
                        <h3>App Crash on Launch</h3>
                        <button className="complete-btn">Complete</button>
                    </div>
                </div>
                <div className="resolve-area">
                    <h3>Resolved Task</h3>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}
