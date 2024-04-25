import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar === true &&
            showContent === true &&
            showRightNavbar === true && (
              <div className="body">
                <div className="left-menu-container">
                  <h1 className="heading-body">Left Navbar Menu</h1>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                  </ul>
                </div>
                <div className="content-menu-container">
                  <h1 className="heading-body">Content</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
                <div className="right-menu-container">
                  <h1 className="heading-body">Right Navbar Menu</h1>
                  <div className="right-box">Ad 1</div>
                  <div className="right-box">Ad 2</div>
                </div>
              </div>
            )}
          {showLeftNavbar === true &&
            showContent === false &&
            showRightNavbar === true && (
              <div className="body">
                <div className="left-menu-container">
                  <h1 className="heading-body">Left Navbar Menu</h1>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                  </ul>
                </div>
                <div className="content-menu-container-false">.</div>
                <div className="right-menu-container">
                  <h1 className="heading-body">Right Navbar Menu</h1>
                  <div className="right-box">Ad 1</div>
                  <div className="right-box">Ad 2</div>
                </div>
              </div>
            )}
          {showLeftNavbar === false &&
            showContent === false &&
            showRightNavbar === true && (
              <div className="body">
                <div className="right-menu-container">
                  <h1 className="heading-body">Right Navebar</h1>
                  <div className="right-box">Ad 1</div>
                  <div className="right-box">Ad 2</div>
                </div>
              </div>
            )}
          {showLeftNavbar === false &&
            showContent === true &&
            showRightNavbar === false && (
              <div className="content-menu-container-true">
                <h1 className="heading-body">Content</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            )}
          {showLeftNavbar === true &&
            showContent === true &&
            showRightNavbar === false && (
              <div className="body">
                <div className="left-menu-container">
                  <h1 className="heading-body">Left Navbar Menu</h1>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                  </ul>
                </div>
                <div className="content-menu-container">
                  <h1 className="heading-body">Content</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
            )}
          {showLeftNavbar === true &&
            showContent === false &&
            showRightNavbar === false && (
              <div className="body">
                <div className="left-menu-container">
                  <h1 className="heading-body">Left Navbar Menu</h1>
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                  </ul>
                </div>
              </div>
            )}
          {showLeftNavbar === false &&
            showContent === true &&
            showRightNavbar === true && (
              <div className="body">
                <div className="content-menu-container">
                  <h1 className="heading-body">Content</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
                <div className="right-menu-container">
                  <h1 className="heading-body">Right Navbar Menu</h1>
                  <div className="right-box">Ad 1</div>
                  <div className="right-box">Ad 2</div>
                </div>
              </div>
            )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
