function UserGreeting(props){
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>age: {props.age}</p>
        </div>
    );
}

export default UserGreeting