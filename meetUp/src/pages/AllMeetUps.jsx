import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetUpList";


function AllMeetUpsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups ] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch('http://localhost:1337/meetups').then((response) => {
      return response.json()
    }).then((data) => {
      setIsLoading(false)
      setLoadedMeetups(data)
      // the above to are not dependencies beaucse react guarantees that they will never change
    })
  }, [])

  if(isLoading) {
    return(
      <section>
        <p>Loading...</p>
      </section>
    )
  }
  
   return  (<section>
       <h1>All meet up</h1>
       <MeetupList meetups={loadedMeetups}/>
       
       </section>)
}

export default AllMeetUpsPage