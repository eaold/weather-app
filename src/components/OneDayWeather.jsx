import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { FlexFunc } from '../styles/styles';

const OneDayWeather = ({ weather, units, active, city, country }) => {
  return (
    <OneDayWeatherContainer>
      <BannerContainer>
        <Title>
          <h3>{active === 'one' ? 'Today' : moment(weather[active].date).format('dddd')}</h3>
          <p>
            {city}, {country}
          </p>
        </Title>
        <Main>
          {weather[active].icon && (
            <Image>
              <img
                src={`https://openweathermap.org/img/wn/${weather[active].icon}@2x.png`}
                alt=""
              />
            </Image>
          )}
          {weather[active].temp && (
            <Temp>
              {Math.round(weather[active].temp)}
              {units === 'metric' ? <span>&deg;C</span> : <span>&deg;F</span>}
            </Temp>
          )}
          <Details>
            {weather[active].temp_feel && (
              <div>
                Feels Like: {Math.round(weather[active].temp_feel)}
                {units === 'metric' ? <span>&deg;C</span> : <span>&deg;F</span>}
              </div>
            )}
            {weather[active].humidity && (
              <div>Humidity: {Math.round(weather[active].humidity)}% </div>
            )}
            {weather[active].wind_speed && (
              <div>
                Wind: {Math.round(weather[active].wind_speed)}
                {units === 'metric' ? 'm/s' : 'mph'}
              </div>
            )}
          </Details>
        </Main>
      </BannerContainer>
    </OneDayWeatherContainer>
  );
};

export default OneDayWeather;

const OneDayWeatherContainer = styled.div`
  ${FlexFunc('row', 'space-between', 'center')}
  height: 100%;
  width: 100%;
  padding: 2rem;
  position: relative;
`;

const Title = styled.div`
  ${FlexFunc('row', 'flex-start', 'baseline')}
  height: 100%;
  letter-spacing: 0.2rem;
  h3 {
    padding-right: 1rem;
  }
  p {
    opacity: 70%;
  }
`;

const Main = styled.div`
  ${FlexFunc('row', 'space-between', 'center')}
  width: 100%;
`;

const Temp = styled.div`
  font-size: 5rem;
`;

const Details = styled.div`
  ${FlexFunc('column', 'space-evenly', 'flex-end')}
  div {
    padding: 1rem 0;
    letter-spacing: 0.2rem;
  }
`;

const BannerContainer = styled.div`
  width: 100%;
  height: 100%;

`;

const Image = styled.div`
  ${FlexFunc('column', 'center', 'center')}
`;
