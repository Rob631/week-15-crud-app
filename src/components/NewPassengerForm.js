import React, {useState} from "react";

export const NewPassengerForm = (props) => {
    const [name, setName] = useState('');
    const [zone, setZone] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(name && zone) {
            props.addNewPassenger({name, zone});
            setName('');
            setZone('');
        } else {
            console.log('invalid input')
        }
    };

    return(
        <div>
            <h4 className="h4"> Add a new Passenger</h4>
            <form onSubmit={onSubmit}>
                <input className="name"
                    type='text'
                    placeholder='name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                 />
                 <br/>
            
                <input className="zone"
                    type='text'
                    placeholder='zone'
                    onChange={(e) => setZone(e.target.value)}
                    value={zone}
                />
                <br/>
                <button className="add" type='submit'>Add Passenger</button>

            </form>
        </div>

    )
}