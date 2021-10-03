import NewMeetUpForm from "./NewMeetUpForm"

function NewMeetUps() {
    
    function addMeetupHandler(meetupData) {
        fetch('http://localhost:1337/meetups',
         {
             method: 'POST',
             headers: {
                "Content-Type": "application/json",
             },
            body: JSON.stringify(meetupData),
            }
         )
    }
   return <section>
       <h1>
       Add New Meetup
       </h1>
       <NewMeetUpForm onAddMeetup={addMeetupHandler}/>
       </section>
}

export default NewMeetUps