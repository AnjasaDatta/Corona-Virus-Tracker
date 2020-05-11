import React from 'react';
import Cards from './Components/Card/Cards';
import Chart from './Components/Chart/Chart';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import { fetchData } from './api/index';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async country => {
    //fetch data
    const fetchedData = await fetchData(country);
    //set state
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div>
        <div className={styles.container}>
          <img
            className={styles.image}
            src='https://i.ibb.co/7QpKsCX/image.png'
            alt='COVID-19'
          />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </div>
        <div className={styles.copyright}>
          <p>
            copyright@AnjasaDatta.Get in touch at :{' '}
            <a href='https://www.linkedin.com/in/anjasa-datta-16a232149/'>
              LinkedIn
            </a>{' '}
            or +919038472713
          </p>
        </div>
      </div>
    );
  }
}
export default App;
