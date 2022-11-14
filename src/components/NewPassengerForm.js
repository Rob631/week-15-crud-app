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
            <h4> Add a new Passenger</h4>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                 placeholder='name'
                 onChange={(e) => setName(e.target.value)}
                    value={name}
                 />
            
                <input
                    type='text'
                    placeholder='zone'
                    onChange={(e) => setZone(e.target.value)}
                    value={zone}
                />
                <button type='submit'>Add Passenger</button>

            </form>
        </div>

    )
}