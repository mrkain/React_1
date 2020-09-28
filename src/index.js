import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';

/*class WhoAmI extends Component {

  constructor(props) {
    super(props)
    this.state = {                           // Это текущее состояние state
      years: 27
    }
    this.nextYear = this.nextYear.bind(this) // Здесь мы с помощью bind привязываем контекст функций к this
    this.prevYear = this.prevYear.bind(this)
  }

  ///////////////////////////////////////////////////////////////////////////////////////

 /!* state = {
    years: 26
  }

  nextYear = () => {                      // ClassFields эксперементальная технология
    this.setState(state => ({
      years: ++state.years
    }))
  }*!/

  ///////////////////////////////////////////////////////////////////////////////////////

  nextYear() {
    this.setState(state => ({
      years: ++state.years
    }))
  }

  prevYear() {
    this.setState(state => ({
      years: --state.years
    }))
  }

  render() {
    const {name, surname, link} = this.props    // Вытаскиваем переменные из this.props, так как создается каждый раз новый экземпляр объекта (деструктуризация)
    const {years} = this.state                  // А здесь вытаскиваем переменную нуфкы из this.state (27)
        return (
            <>
              <button onClick={this.nextYear}>++</button>
              <button onClick={this.prevYear}>--</button>
              <h1>My name is {name}, surname - {surname}, years - {years}</h1>
              <a href={link}>My profile</a>
            </>
        )
  }
}

////////////////////////////////////////////

const All = () => {
  return (
      <>
        <WhoAmI name="John" surname="Smith" link="lamoda.ru"/>
        <WhoAmI name="Ivan" surname="Smooth" link="lamoda.ru"/>
        <WhoAmI name="Aleksey" surname="Glass" link="lamoda.ru"/>
      </>
  )
}*/

ReactDOM.render(<App/>, document.getElementById('root')
);

