import React from "react";
import {NewPassengerForm} from './NewPassengerForm';

export const Flight = (props) => {
    const { flight, updateFlight} = props;

    const deletePassenger = (passengerId) => {
        const updatedFlight = {
            ...flight,
            passengers : flight.passengers.filter((x)=>x.id !== passengerId)
        };
        updateFlight(updatedFlight);
    }

    const addNewPassenger = (passenger) => updateFlight({ ...flight, passengers:[...flight.passengers, passenger]})

    const passengers = () => (
        <ul>
            {flight.passengers.map((passenger, index) => (
                <li key={index}>
                    <label> {`${passenger.name} Zone: ${passenger.zone}`} </label>
                    <button onClick={(e) => deletePassenger(passenger.id)}>Remove Passenger</button>
                </li>
            ))}
        </ul>
    );
    return(
        <div>
            <h1>{flight.name}</h1>
            {
                passengers({passengers, flightId: flight.id, deletePassenger})
            }
            <NewPassengerForm addNewPassenger={addNewPassenger} />
        </div>
    )
    
}