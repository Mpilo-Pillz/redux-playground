import NewMeetUpForm from "./NewMeetUpForm"
import { useHistory } from 'react-router-dom';

function NewMeetUps() {
    const history = useHistory()
    function addMeetupHandler(meetupData) {
        
        fetch('http://localhost:1337/meetups',
         {
             method: 'POST',
             headers: {
                "Content-Type": "application/json",
             },
            body: JSON.stringify(meetupData),
            }
         ).then(() => {
             history.replace('/') // disable the back button going back to the form
         })
    }
   return <section>
       <h1>
       Add New Meetup
       </h1>
       <NewMeetUpForm onAddMeetup={addMeetupHandler}/>
       </section>
}

export default NewMeetUps