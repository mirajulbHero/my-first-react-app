
// import React from 'react'
import React, {use,useState} from "react";
import './Customer.css'
import Ellipse from '../../assets/Ellipse.png'
import { toast } from "react-toastify";

export default function Customer({customerPromise , setInProgress,setResolvedCount}) {
    const data = use(customerPromise);
    const [selectedCards, SetSelectedCards] = useState([]);
    const [resolveItems, setResolveItems] = useState([]);
    const [cardItem, setCardItem] = useState(data);

    
    const handalCustomer = (customer) =>{

        const isExits = selectedCards.find(item => item.id == customer.id);
        if (isExits){
            toast('it Already added')
            return
        }
        SetSelectedCards ([...selectedCards, customer]);
       
        setInProgress(item => item + 1); 
        toast('complete task');
    //    alert('complete task');
       
    }

    const handelComplete = (customer) =>{
        setResolveItems([...resolveItems , customer]);

        const remaining = selectedCards.filter(item => item.id !== customer.id)
        SetSelectedCards (remaining)

        const remainingCard = cardItem.filter(item => item.id !== customer.id);
        setCardItem(remainingCard);

        setInProgress(item => item  - 1); 
        setResolvedCount(item => item + 1); 
        toast('Complete')
    }

  
   

  return (
    <div className="bg-color">
        <div className="customer-area container">
           
            <div className="customer-tickets">
                <h3>Customer Tickets</h3>
                <div className="card-grid">
                    {
                        cardItem.map((customer) => <div onClick={() =>handalCustomer(customer)} key ={customer.id} className="customer-card">
                        <div className="title-btn">
                            <h5>{customer.title}</h5>
                            <button className={`${customer.status == "Open"? "blue" : customer.status == "In-Progress"? "yellow" : "red"}`}><img src={Ellipse} alt="" />{customer.status}</button>
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
            <div className="all-task-content">
                <div className="task-area">
                    <h3>Task Status</h3>
                    {
                        selectedCards.map(selectedCard =>       
                            <div key = {selectedCard.id} className="task-content">
                                <h3>{selectedCard.title}</h3>
                                <button onClick={() => handelComplete(selectedCard )} className="complete-btn">Complete</button>
                            </div>
                        )
                    }
                    
                </div>
                <div className="resolve-area">
                    <h3>Resolved Task</h3>
                    {
                       resolveItems.map(customer => 
                        <div key ={customer.id} className="resolve-content">
                            <h3>{customer.title}</h3>
                            <p>Complete</p>
                        </div>
                        
                       )
                        
                    }
                </div>
                
                
            </div>
        </div>
    </div>
  )
}
