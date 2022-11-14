const FLIGHTS_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class FlightsApi {
    get = async () => {
        try {
            const resp = await fetch(FLIGHTS_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log('Oops, looks like fetchFlights had an issue', e);
        }
    }

    put = async (flight) => {
        try{
            const resp = await fetch(`${FLIGHTS_ENDPOINT}/${flight.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(flight)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, looks like updating flights had an issue', e);
        }
    }
}

export const flightsApi = new FlightsApi();