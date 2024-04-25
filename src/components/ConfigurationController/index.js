import CongfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <CongfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        onToggleShowContent,
        showLeftNavbar,
        onToggleShowLeftNavbar,
        showRightNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = event => {
        console.log(event.target.checked)
        onToggleShowContent(event.target.checked)
      }

      const onChangeLeftBox = event => {
        console.log(event.target.checked)
        onToggleShowLeftNavbar(event.target.checked)
      }

      const onChangeRightBox = event => {
        console.log(event.target.checked)
        onToggleShowRightNavbar(event.target.checked)
      }

      return (
        <div className="controller-container">
          <h1 className="layout-heading">Layout</h1>
          <div className="checkbox-container" onChange={onChangeContent}>
            <input
              className="checkBox"
              type="checkBox"
              id="context-checkbox"
              checked={showContent}
            />
            <label className="checkbox-label" htmlFor="context-checkbox">
              Content
            </label>
          </div>
          <div className="checkbox-container" onChange={onChangeLeftBox}>
            <input
              className="checkBox"
              type="checkBox"
              id="left-checkbox"
              checked={showLeftNavbar}
            />
            <label className="checkbox-label" htmlFor="left-checkbox">
              Left Navbar
            </label>
          </div>
          <div className="checkbox-container" onChange={onChangeRightBox}>
            <input
              className="checkBox"
              type="checkBox"
              id="right-checkbox"
              checked={showRightNavbar}
            />
            <label className="checkbox-label" htmlFor="right-checkbox">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </CongfigurationContext.Consumer>
)

export default ConfigurationController
