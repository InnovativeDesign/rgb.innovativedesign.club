import './App.css';
import Banner from './img/banner2.png'

const scheduleContent = [
  {
    name: "Welcome to RGB 2022",
    time: "1:00 pm",
    desc: "Welcome, Player! RGB 2022 is about to begin!",
  },
  {
    name: "✨ Elizabeth Zhou",
    title: "Product Designer @ Applied Intuition",
    time: "1:20 pm",
    prez: "A Leap of Faith into Design",
    // link: "https://erikherrstrom.com/"
  },
  {
    name: "✨ Elizabeth Tang",
    title: "Creative Photographer",
    time: "2:10 pm",
    prez: "Re-Imagining Images",
    extra: "*Please have Adobe Photoshop downloaded prior"
  },
  {
    name: "Intermission",
    time: "3:00 pm",
    desc: "Take a pause ⏸︎. We'll be back shortly!",
  },
  {
    name: "✨ Rachel Xiang",
    title: "Freelance 3D Animator",
    time: "3:20 pm",
    prez: "Watering Your Creative Plants: Learnings From My Journey to 3D Animation",
    // link: "https://www.talasafie.com/"
  },
    {
    name: "✨ Sasha Dimov",
    title: "Product Designer @ Steward",
    time: "4:10 pm",
    prez: "How to Quit Your Job: A Search for Meaningful Work",
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
    desc: "Thanks for playing! 🕹️",
  },
]

function Schedule({ content }) {
  return (
    <>
      <div className="schedule">
        {content.map(speaker => (
          <>
          {speaker.desc ? 
            <a href={speaker.link} className="speakerHover" target="_blank" rel="noreferrer">
              <div>
                <div className="speakerTime">{speaker.time}</div>
                <div className="speakerName">{speaker.name}</div>
              </div>
              <div className="speakerDesc">{speaker.desc}</div>
            </a>
            : 
            <a href={speaker.link} className="speakerHover" target="_blank" rel="noreferrer">
              <div>
                <div className="speakerTime">{speaker.time}</div>
                <div className="speakerName">{speaker.name}</div>
              </div>
              <div className="speakerPrez">
                <div>"{speaker.prez}"</div>
                <br></br>
                <div><i>{speaker.extra}</i></div>
              </div>
            </a>
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
        <a className="registerButton" href="https://www.eventbrite.com/e/273943210517" target="_blank" rel="noreferrer">REGISTER NOW</a>
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
