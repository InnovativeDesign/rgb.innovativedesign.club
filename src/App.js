import './App.css';
import Banner from './img/banner2.png'

const scheduleContent = [
  {
    name: "Welcome to RGB 2022",
    time: "1:00 pm",
    desc: "Welcome, Player! RGB 2022 is about to begin!",
  },
  {
    name: "TBD",
    time: "1:20 pm",
    // desc: "Formerly Brand Design Director at Spotify. Now, independent designer based in Vienna with focus on branding and art direction",
    // link: "https://erikherrstrom.com/"
  },
  {
    name: "TBD",
    time: "2:10 pm",
    // desc: "A Guadalajara-based Senior UX designer, currently leading the team that’s getting rid of food waste in our Wizeline offices. I’m also a mentor, an occasional speaker, and a full-time advocate of naps.",
    // link: "https://dossiette.com/"
  },
  {
    name: "Intermission",
    time: "3:00 pm",
    desc: "Take a pause ⏸︎. We'll be back shortly!",
  },
  {
    name: "TBD",
    time: "3:20 pm",
    // desc: "I am a graphic designer from Beirut based in New York. I currently work with AIGA Eye on Design 🤱🏽 and as an art director for The New York Times.",
    // link: "https://www.talasafie.com/"
  },
    {
    name: "TBD",
    time: "4:10 pm",
    // desc: "I am a graphic designer from Beirut based in New York. I currently work with AIGA Eye on Design 🤱🏽 and as an art director for The New York Times.",
    // link: "https://www.talasafie.com/"
  },
  {
    name: "Office Hours",
    time: "5:00 pm",
    desc: "Come meet the designers and ask any questions you have!",
  },
  {
    name: "Closing + Raffle Winner",
    time: "5:50 pm",
  },
]

function Schedule({ content }) {
  return (
    <>
      <div className="schedule">
        {content.map(speaker => (
          <>
          {speaker.link ? 
            <a href={speaker.link} className="speakerHover" target="_blank" rel="noreferrer">
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
        <Content/>
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
        <h3>3/12/22, 1-6pm @Jacobs 310</h3>
        <a className="registerButton" href="https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.eventbrite.com%2Fe%2F273943210517&h=AT08hvSM9i4J7fuvXTRzTbJ0mMGoyGhRA2w6RYDsXVth3osm80YJRqZyYq2n-f0gxJyMYBITM3KZDqz8BIWGu-HbuICD6ld3rVhYkJ59aQ-_szBGG5cqB0LdkIU7oMXFHLmkTpbKyPU" target="_blank" rel="noreferrer">REGISTER NOW</a>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <div className="home">
        <Heading />
        <div className="section2">
          <p>Press [𝚂𝚃𝙰𝚁𝚃 ▶]: Reach, Grow, and Build your design career at RGB 2022 through an industry speaker series, workshops, and a networking event! We’ll be joined by speakers whose careers have taken through both freelance and corporate industries. Stay until the end for customized stickers, a raffle prize and game-themed goodies!</p>
          <h3 style={{textAlign: "center", color: "#ff62ff"}}>SCHEDULE</h3>
          <Schedule content={scheduleContent} />
          <div class="footer">
            <a href="https://innovativedesign.club/" target="_blank" rel="noreferrer">&copy; innovative design</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
