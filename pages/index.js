import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Funmbi Adeyokunnu</title>
      </Head>

      <main>
        <h1 className="title">Hi, I'm Funmbi</h1>
        <p className="description">I'm a <b>Software Engineer</b> currently working at <b><a href="http://andela.com/" target="#">Andela</a></b>, with the <b><a href="https://www.bellwethercoffee.com/" target="#">Bellwether Coffee</a></b> team.</p>
        <p className="description"></p>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a,
        .description a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 30px 0;
          line-height: 1.15;
          font-size: 3.2rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          margin: 4px 0;
          line-height: 1.5;
          font-size: 1.5rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
