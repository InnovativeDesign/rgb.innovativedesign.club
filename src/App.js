import './App.css';
import Banner from './img/BANNER.png'

const scheduleContent = [
  {
    name: "Welcome to RGB 2021",
    time: "1:00 pm",
    desc: "Sit tight, RGB 2021 is about to begin!",
  },
  {
    name: "Erik Herrström",
    time: "1:10 pm",
    desc: "Formerly Brand Design Director at Spotify. Now, independent designer based in Vienna with focus on branding and art direction",
    link: "https://erikherrstrom.com/"
  },
  {
    name: "Elba Ornelas",
    time: "2:00 pm",
    desc: "A Guadalajara-based Senior UX designer, currently leading the team that’s getting rid of food waste in our Wizeline offices. I’m also a mentor, an occasional speaker, and a full-time advocate of naps.",
    link: "https://dossiette.com/"
  },
  {
    name: "Tala Safié",
    time: "2:50 pm",
    desc: "I am a graphic designer from Beirut based in New York. I currently work with AIGA Eye on Design 🤱🏽 and as an art director for The New York Times.",
    link: "https://www.talasafie.com/"
  },
  {
    name: "Office Hours",
    time: "3:30 pm",
    desc: "Come meet the designers and ask any questions you have!",
  },
]

function Schedule({ content }) {
  return (
    <>
      <div className="schedule">
        {content.map(speaker => (
          <>
          {speaker.link ? 
            <a href={speaker.link} className="speakerHover" target="_blank">
              <div>
                <div className="speakerTime">{speaker.time}</div>
                <div className="speakerName">{speaker.name}</div>
              </div>
              <div className="speakerDesc">{speaker.desc}</div>
            </a>
            : 
            <div href={speaker.link} className="speaker" target="_blank">
              <div>
                <div className="speakerTime">{speaker.time}</div>
                <div className="speakerName">{speaker.name}</div>
              </div>
              <div className="speakerDesc">{speaker.desc}</div>
            </div>
          }
          </>
        ))}
      </div>
    </>
  )
}

function Heading() {
  return (
    <>
      <div className="heading">
        {/* <h2 className="rotateRight">REACH GROW BUILD</h2> */}
        <img src={Banner} alt="BANNER" className="banner" />
        {/* <h2 className="rotateLeft">INNOVATIVE DESIGN</h2> */}
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
        <a className="registerButton" href="https://www.eventbrite.com/e/rgb-2021-speaker-series-tickets-144309562787" target="_blank">REGISTER NOW</a>
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
          <p>RGB will be hosted on March 13th, and will provide students with the opportunity to listen to industry professionals discuss their careers. RGB 2021 will be a virtual event, and we'll be joined by speakers whose careers have taken them to Spotify, the New York Times, and beyond!</p>
          <h3 style={{textAlign: "center", color: "#FFB91C"}}>SCHEDULE</h3>
          <Schedule content={scheduleContent} />
        </div>
      </div>
    </>
  );
}

export default App;
