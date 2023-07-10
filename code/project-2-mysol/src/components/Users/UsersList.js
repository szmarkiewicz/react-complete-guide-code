export default function UsersList(props) {
    return (
        <ul>
            {props.content.map((item) => <li key={Math.floor(Math.random()*1000000000)}>
                <p>{item.username} ({item.age} years old)</p>
            </li>)}
        </ul>
    );
}