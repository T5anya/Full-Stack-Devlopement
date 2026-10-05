import { useState } from 'react'
function App(){

}


export default App
/*
Hotel Explorer with:

State
hotels
loading
error
search
selectedHotel
Components
App
 ├── SearchBar
 ├── HotelList
 │    └── HotelCard
 └── BookingSummary
Requirements
Fetch hotel data using useEffect.
Show "Loading..." while fetching.
Show an error if fetching fails.
Display hotels using .map().
Search hotels.
Clicking a hotel selects it.
Show selected hotel in BookingSummary.
Add a favorite button.
Show "No hotels found" if filtering produces no results.
Use cleanup when you add an event listener or timer.

State
hotels
loading
error
city
selectedHotel
UI
--------------------------------
         STAYORA
--------------------------------

[ Search city... ]

[ Search ]

Loading...

OR

Hotel 1
Taj Hotel
Lucknow
₹5000
[View Details]

Hotel 2
Hyatt
Lucknow
₹6000
[View Details]

OR

No hotels found

OR

Unable to load hotels
Requirements

Use:

✅ useState
✅ useEffect
✅ fetch
✅ async/await
✅ try/catch
✅ response.ok
✅ response.json()
✅ loading state
✅ error state
✅ map()
✅ key

Then add:

Search
   ↓
API request
   ↓
Filtered hotels

And finally:

View Details
   ↓
selectedHotel
   ↓
Hotel Details component
*/