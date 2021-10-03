import MeetupItem from "./MeetupItems";
import classes from "./MeetupList.module.css";
function MeetupList(props) {
    console.log("Props-->", props);
    return( <ul className={classes.list}>
        {props.meetups.map(meetup => <MeetupItem  
        key={meetup.id} 
        id={meetup.id} 
        image={meetup.image} 
        title={meetup.title}
        description={meetup.description}
        />)}
    </ul>)
}

export default MeetupList