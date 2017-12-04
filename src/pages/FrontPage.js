import React, { Component } from 'react';

import { Container } from '../components/Container';
import { FlyingBanner } from '../components/Banner';
import CountdownTimer from '../modules/CountdownTimer';
import { Program, FinlandBanner, BannerText } from '../components/Program';
import { ButtonContainer, LinkButton } from '../components/Button';

import programImg from '../resources/ohjelma.png';
class FrontPage extends Component {
  render() {
    return (
      <Container>
        <FlyingBanner>
            <img src="https://i.redd.it/7jr0w8eengzy.gif" alt="Välkkyvä papukaija" />
            <h1>Sophisticated Pub Crawl</h1>
            <img src="https://2.bp.blogspot.com/-lRP3x2hgg38/ULfN8-Vm7VI/AAAAAAAAEUc/mYMja-8knMQ/s1600/Animated+Flag+of+Finland+flag+animation+(3).gif" alt="Suomi 100v perkele!"/>
        </FlyingBanner>
        <FinlandBanner>
          <BannerText blue>Suomi</BannerText><BannerText>100v!</BannerText>
        </FinlandBanner>
        <CountdownTimer />
        <Program>
          <a href="http://maps.google.com/?q=Kallio,Helsinki">
            <img src={programImg} alt="Ohjelman lataus epäonnistui"/>
          </a>
        </Program>
        <ButtonContainer>
          <LinkButton to='/signuppade'>ILMOITTAUDU!</LinkButton>
        </ButtonContainer>
      </Container>
    );
  }
}

export default FrontPage;
