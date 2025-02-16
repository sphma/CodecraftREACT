import { useState } from 'react';
import './style.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from './components/Section';
import List from './components/List';
import Image from './components/Image';

const App = () => {
  return (
    <>
      <Header />
      <Section title="Highlights">
        <List title="Remember to live out our values" type="ol">
          <li>Relentless Learning and Growth</li>
          <li>Creative Problem Solving</li>
          <li>Curiosity-Driven Exploration</li>
        </List>
        <List title="Upcoming Events" type="ul">
          <li><b>Feb 7: </b> Employee Hack-a-ston</li>
          <li><b>Mar 7: </b> Food Bank Volunteering</li>
          <li><b>Apr 4: </b> Company Retreat</li>
        </List>
      </Section>
      <Section title="Latest Events">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis animi laudantium eos atque sed debitis eum deleniti cumque saepe aut voluptatibus, dolores commodi corporis quibusdam
        numquam perferendis, molestias tenetur suscipit!.</p>
        <Image 
            src="https://plus.unsplash.com/premium_photo-1709247069711-068d383b8497?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt = "Kickball outing"
            width ="35%"
            />
        <Image
            src= "https://plus.unsplash.com/premium_photo-1661429511577-b165fc04718f?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt= "Happy Hour"
            width="35%" 
          />
      </Section>
      <Footer />
    </>
  );
};

export default App;