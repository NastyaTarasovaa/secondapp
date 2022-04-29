import './hero.css';

function hero(props) {
    return (
        <div className="hero-card" >
            <img src={props.url}></img>
            <div className="hero-name">{props.name}</div>
            <div className="hero-text">{props.text}</div>
            <button>Оценить</button>
        </div>
    );
}

export default hero