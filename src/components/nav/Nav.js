import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/">
          <h1>
            <span>🖨️</span>Elon Code Review
          </h1>
        </Link>
        <ul>
          <Link to="#">
            <li>Features</li>
          </Link>
          <Link to="#">
            <li>Testimonial</li>
          </Link>
          <Link to="#">
            <li>Pricing</li>
          </Link>
        </ul>
        <a
          href="https://thumbs.gfycat.com/WhiteBountifulAfricangroundhornbill-mobile.mp4"
          target="_blank"
          rel="noreferrer"
        >
          <span className="signin">Sign in</span>
        </a>
        <button className="btn hidden">|||</button>
      </nav>
    </>
  )
}

export default Nav
