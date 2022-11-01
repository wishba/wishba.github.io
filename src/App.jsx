import Card from './Card'

function App() {
  const main = {
    maxWidth: '22.5rem',
    display: 'grid',
    margin: 'auto'
  }
  const gridContainer = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    placeItems: 'center',
    gap: '1rem'
  }
  return (
    <div style={main}>
      <header>
        <h1>
          Hello! My Name Is
          <br />
          Wisnu Bayu
        </h1>
        <p>
          I am an informatics engineering student who really likes the field of front-end development.
        </p>
      </header>

      <main>
        <section>
          <h2>Recent Project</h2>
          <div style={gridContainer}>
            <Card
              image='/sc-sqr-advice.png'
              title='Advice Generator App'
              link='https://wishba.github.io/advice-generator-app-main/'
            />
            <Card
              image='sc-sqr-news.png'
              title='News Homepage'
              link='https://wishba.github.io/news-homepage-main/'
            />
            <Card
              image='sc-sqr-sunny.png'
              title='Sunnyside agency landing page'
              link='https://wishba.github.io/sunnyside-agency-landing-page-main/'
            />
            <Card
              image='sc-sqr-time.png'
              title='Time Tracking Dashboard App'
              link='https://wishba.github.io/time-tracking-dashboard-main/'
            />
          </div>
        </section>

        <section>
          <h2>Socials</h2>
          <div style={gridContainer}>
            <a href="https://twitter.com/wishba_" target="_blank" rel="noopener noreferrer">
              twitter @wishba_
            </a>
            <a href="https://github.com/wishba" target="_blank" rel="noopener noreferrer">
              github @wishba
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
