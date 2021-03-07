import './App.css';
import Banner from './img/BANNER.svg'

const scheduleContent = [
  {
    name: "Welcome to RGB 2021",
    time: "1:00 pm",
    desc: "Sit tight, RGB 2021 is about to begin!",
  },
  {
    name: "Erik Herrström",
    time: "1:10 pm",
    desc: "Independent Design Director",
  },
  {
    name: "Elba Ornelas",
    time: "2:00 pm",
    desc: "Dossiette",
  },
  {
    name: "Tala Safié",
    time: "2:50 pm",
    desc: "New York Times",
  },
  {
    name: "Office Hours",
    time: "3:30 pm",
    desc: "Open QA",
  },
]

function Schedule({ content }) {
  return (
    <>
      <div className="schedule">
        {content.map(speaker => (
          <div className="speaker">
            <div>
              <div className="speakerTime">{speaker.time}</div>
              <div className="speakerName">{speaker.name}</div>
            </div>
            <div className="speakerDesc">{speaker.desc}</div>
          </div>
        ))}
      </div>
    </>
  )
}

function Heading() {
  return (
    <>
      <div className="heading">
        <h2 className="rotateRight">REACH GROW BUILD</h2>
        <img src={Banner} alt="BANNER" className="banner" />
        <h2 className="rotateLeft">INNOVATIVE DESIGN</h2>
      </div>
    </>
  )
}

function Content() {
  return (
    <>
      <div className="content">
        <h2>Innovative Design presents</h2>
        <div className="contentText">
          <h3 className="REACH">REACH - </h3>
          <h3 className="GROW"> - GROW - </h3>
          <h3 className="BUILD"> - BUILD</h3>
        </div>
        <h3>3/13/21, 1-4pm PT</h3>
        <h1 className="registerButton"><a href="https://www.eventbrite.com/e/rgb-2021-speaker-series-tickets-144309562787">REGISTER NOW</a></h1>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <div className="home">
        <Heading />
        <Content />
        <div className="section2">
          <p>Join Innovative Design on Saturday, March 9th for a day of learning from industry designers through a series of talks, workshops, and open Q&A. Following the theme of 'creative conversations', speeches and workshops will explore the unique backgrounds of these professionals and how they made their way through the design industry!</p>
          <h3 style={{textAlign: "center", color: "#FFB91C"}}>SCHEDULE</h3>
          <Schedule content={scheduleContent} />
        </div>
      </div>
    </>
  );
}

export default App;
