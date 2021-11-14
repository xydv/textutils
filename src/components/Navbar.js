import React from 'react'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container">
        <a className="navbar-brand" href="/">{props.title}</a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
			<button 
				type="button" 
				onClick={props.cmode} 
				className={`btn btn-${props.mode === "light" ? "dark" : "light"}`}>
				{props.mode==="light" ? "Dark" : "Light"} Mode
			</button>
        </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'App Name',
  about: 'Link'
};