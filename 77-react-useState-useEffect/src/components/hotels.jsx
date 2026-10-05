import { useState, useEffect } from "react";

function Hotels() {

  //const [city,setcity]=useState('');
  // const controller = new AbortController();

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    async function fetchHotels() {

      try {

        const response = await fetch(
          "https://example.com/api/hotels"
          // ,{signal: controller.signal}-for aborting the request
        );//to search for a specific city-const response = await fetch(`/api/hotels?city=${city}`);

        if (!response.ok) {
          throw new Error("Failed to fetch hotels");
        }

        const data = await response.json();

        setHotels(data);
        setError(null);

      } catch (error) {
        //if (error.name !== "AbortError") 
              setError(error.message);

      } finally {

        setLoading(false);

      }
    }

    fetchHotels();
    /*
     return () => {
      controller.abort();
      };
    */

  }, []);//[city]

  if (loading) {
    return <p>Loading hotels...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>

      {hotels.map((hotel) => (
        <div key={hotel.id}>
          <h2>{hotel.name}</h2>
          <p>₹{hotel.price}</p>
        </div>
      ))}

    </div>
  );
}
export default  Hotels;
/*but if the user types-
D
De
Del
Delh
Delhi

this will result in 4 API calls-
A common solution is debouncing.
Meaning:
Wait until the user stops typing for a short time before making the request.

another probelm is that user first typpes--delhi-request A
then quickly types-- mumbai-request B

It is possible for responses to arrive in an unexpected order.
Now the UI incorrectly shows Delhi even though the current search is Mumbai.
This is a race condition.

One solution is cancelling the previous request.
Now when city changes:

Old effect
   ↓
cleanup
   ↓
abort old request
   ↓
new effect
   ↓
new request

This is a powerful real-world pattern.
React cleans up the old effect.
The cleanup:

controller.abort();

cancels the old request.
Then the new effect starts.
*/