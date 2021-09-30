import classes from './Card.module.css';

function Card(props) {
    // this component pases down its styles to its chldren to inherit this is composotion
    return <div className={classes.card}>
        {props.children}
    </div>
}

export default Card;