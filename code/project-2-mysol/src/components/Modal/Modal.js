export default function Modal(props){
    return (
        <div style={{position: "absolute", left: 0, right: 0, top: 0, bottom: 0, width: 300, margin: "auto"}}>
            <header>
                <h4>Could not add user</h4>
            </header>
            <main>
                <p>
                    Reason: {props.errorMsg}
                </p>
            </main>
            <footer>
                <button type={'button'} onClick={props.onClose}>Close</button>
            </footer>
        </div>
    );
}