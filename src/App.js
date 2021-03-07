import './App.css';
import Banner from './img/BANNER.svg'

const scheduleContent = [
  {
    name: "Erik Herrström",
    time: "1:10 pm",
    desc: "Independent Design Director",
  },
  {
    name: "Erik Herrström",
    time: "1:10 pm",
    desc: "Independent Design Director",
  },
  {
    name: "Erik Herrström",
    time: "1:10 pm",
    desc: "Independent Design Director",
  },
  {
    name: "Erik Herrström",
    time: "1:10 pm",
    desc: "Independent Design Director",
  },
  {
    name: "Erik Herrström",
    time: "1:10 pm",
    desc: "Independent Design Director",
  },
]

function Schedule({ content }) {
  return (
    <>
      <div className="schedule">
        {content.map(speaker => (
          <div className="speaker">
            <div>
              <p>{speaker.name}</p>
              <p>{speaker.time}</p>
            </div>
            <p>{speaker.desc}</p>
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
        <h1 className="registerButton"><a href="https://www.youtube.com/watch?v=mziqemzMMeU&ab_channel=SlappersOnly">REGISTER NOW</a></h1>
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
