import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Container } from '../components/Container';
import { Title } from '../components/Title';
import { Input } from '../components/Input';
import { ParticipantContainer, TeamContainer, TeamName, ParticipantList } from '../components/Table';


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { teams: [{}] };
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillMount = () => {
    var self = this;
    fetch('http://localhost:51631/api/teams').then(function (response) {
      return response.json();
    }).then(function (data) {
      self.setState({ teams: data });
    });
  }
  onSubmit = (e) => {
    var self = this;
    e.preventDefault();
    const data = new FormData(e.target);
    const newParticipant = { Name: data.get("participant") };
    fetch("http://localhost:51631/api/participants",
      {
        method: "POST",
        body: JSON.stringify(newParticipant),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }).then(function (res) { return res.json(); })
      .then(function (data) {
        const updatedTeams = self.state.teams;
        const teamIndex = updatedTeams.findIndex(t => t.name === data.teamName);
        if (teamIndex !== -1) {
          console.log(updatedTeams[teamIndex]);
          updatedTeams[teamIndex].participants.push(data);
          self.setState({ teams: updatedTeams });
        }
      });
  }
  render() {
    const { teams } = this.state;
    const participants = this.state.teams.map((p, i) => (
      <TeamContainer>
        <TeamName>{p.name}</TeamName>
        <ParticipantList>
          {p.participants && (
            p.participants.map(part => (<li>{part.name}</li>))
          )}
        </ParticipantList>
      </TeamContainer>
    ))
    return (
      <Container>
        <Title>ILMOITTAUDU!</Title>
        <form onSubmit={this.onSubmit}>
          <Input id='participant' name='participant' type='text' placeholder='Nimi!' />
          <Input type='submit' value="OK" />
        </form>
        <ParticipantContainer>
          {participants}
        </ParticipantContainer>       
      </Container>
    );
  }
}

export default SignUp;