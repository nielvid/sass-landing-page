import Logo from '../assets/logo.png'

export default function TopHeader() {
  return (
    <div className="top-header">
      <div className="top-header__logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="top-header__nav">
       
          <li>About</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Services</li>
          <li>Contact</li>
        
      </div>
      <div className="top-header__cta">
        <button>Get free Call</button>
      </div>
    </div>
  )
}
