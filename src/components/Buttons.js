import '../styles/App.css';

const Buttons = (props) => {
    return ( 
        <button className='btn' onClick={props.handle}>
            {props.text}
        </button>
     );
}
 
export default Buttons;