import Card from './Card'
import imgAdvice from './assets/sc-sqr-advice.png'
import imgNews from './assets/sc-sqr-news.png'
import imgSunny from './assets/sc-sqr-sunny.png'
import imgTime from './assets/sc-sqr-time.png'

function App() {
  return (
    <main>
      <section>
        <h1>
          Hello! My name is
          <br />
          <span>
            Wisnu Bayu
          </span>
        </h1>
        <p>
          I am an informatics engineering student who has a passion for front end development field
        </p>
      </section>

      <section>
        <h2>My Recent Project</h2>
        <div className='grid__container'>
          <Card
            image={imgAdvice}
            title='Advice Generator App'
            link='https://wishba.github.io/advice-generator-app-main/'
          />
          <Card
            image={imgNews}
            title='News Homepage'
            link='https://wishba.github.io/news-homepage-main/'
          />
          <Card
            image={imgSunny}
            title='Sunnyside agency landing page'
            link='https://wishba.github.io/sunnyside-agency-landing-page-main/'
          />
          <Card
            image={imgTime}
            title='Time Tracking Dashboard App'
            link='https://wishba.github.io/time-tracking-dashboard-main/'
          />
        </div>
      </section>

      <section>
        <h2 className='social__header'>My Socials</h2>
        <div className='grid__container'>
          <a href="https://twitter.com/wishba_" target="_blank" rel="noopener noreferrer">
            twitter @wishba_
          </a>
          <a href="https://github.com/wishba" target="_blank" rel="noopener noreferrer">
            github @wishba
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
