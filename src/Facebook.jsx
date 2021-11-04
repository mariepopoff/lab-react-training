import React, { Component } from 'react';
import profiles from './data/berlin.json';
import './Facebook.css';
const allProfiles = profiles;

export default class Facebook extends Component {
  state = {
    countrySelected: 'all',
  };

  addColor = (country) => {
    
    this.setState({
      countrySelected: country.country,
    });
  };

  render() {
    let country = [];
    {
      allProfiles.forEach((profile, i) => {
        let found = country.find((country) => country === profile.country);
        if (!found)
          country = [...country, profile.country].sort(function (a, b) {
            return a.localeCompare(b);
          });
      });
    }
    return (
      <div>
        <div>
          <button onClick={() => this.addColor('all')}>All</button>
          {country.map((country, i) => {
            return (
              <button id={i} onClick={() => this.addColor({ country })}>
                {country}
              </button>
            );
          })}
        </div>
        {allProfiles.map((profile, i) => {
          return (
            <div id="profile" class = {profile.country === this.state.countrySelected ? "true" : "false"}>
              <img src={profile.img}  alt=  "photo-student" width="200px" />
              <div>
                <ul>
                  <li>
                    <b>First name:</b> {profile.firstName}
                  </li>
                  <li>
                    <b>Last name:</b> {profile.lastName}
                  </li>
                  <li>
                    <b>Country:</b> {profile.country}
                  </li>
                  <li>
                    <b>Type:</b> {profile.isStudent ? 'Student' : 'Teacher'}
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
