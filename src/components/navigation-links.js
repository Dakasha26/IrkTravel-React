import React from 'react'

import PropTypes from 'prop-types'

import styles from './navigation-links.module.css'

const NavigationLinks = (props) => {
  return (
    <nav className={` ${styles['Nav']} ${styles[props.rootClassName]} `}>
      <span className={styles['text']}>{props.text}</span>
      <span className={styles['text1']}>{props.text1}</span>
      <span className={styles['text2']}>{props.text2}</span>
      <span className={styles['text3']}>{props.text3}</span>
      <span className={styles['text4']}>{props.text4}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text1: 'Features',
  text4: 'Blog',
  text: 'About',
  rootClassName: '',
  text2: 'Pricing',
  text3: 'Team',
}

NavigationLinks.propTypes = {
  text1: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
}

export default NavigationLinks
