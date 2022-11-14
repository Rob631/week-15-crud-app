import React from "react";
import { Flight } from './Flight';
import { flightsApi } from "../components/rest/FlightsApi";


export class FlightsList extends React.Component {
        state = {
         flights : []
    };
    

    componentDidMount() {
        this.fetchFlights();
    }

    fetchFlights = async () => {
        const flights = await flightsApi.get();
        this.setState({ flights });
    };

    updateFlight = async(updatedFlight) => {
        await flightsApi.put(updatedFlight);
        this.fetchFlights();
    };

    render() {
        return (
            <div className="flight-list">
                {this.state.flights.map((flight) => (
                    <Flight
                        flight={flight}
                        key={flight.id}
                        updateFlight={this.updateFlight}
                    />
                ))}
            </div>
        )
    }

}