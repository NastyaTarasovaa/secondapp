import './hero.css';

function hero() {
    return (
        <div className="hero-card" >
            <img src="https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg"></img>
            <div className="hero-name">Бэтмен</div>
            <div className="hero-text">Род деятельности:борец с преступностью, филантроп</div>
            <button>Оценить</button>
        </div>
    );
}

export default hero