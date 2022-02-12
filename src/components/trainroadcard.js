import React from 'react'

import PropTypes from 'prop-types'

import styles from './trainroadcard.module.css'

const Trainroadcard = (props) => {
  return (
    <div className={styles['GalleryCard']}>
      <img
        src="https://baikaltravelclub.ru/upload/resize_cache/iblock/7d9/900_600_1/7d9e9a9969bbf403c32c4c26467908d1.jpg"
        loading="eager"
        className={styles['image']}
      />
      <h2 className={styles['text']}>{props.heading}</h2>
      <span className={styles['text1']}>{props.text}</span>
    </div>
  )
}

Trainroadcard.defaultProps = {
  text: 'ÐÑÑÐ³Ð¾Ð±Ð°Ð¹ÐºÐ°Ð»ÑÑÐºÐ°Ñ Ð¶ÐµÐ»ÐµÐ·Ð½Ð°Ñ Ð´Ð¾ÑÐ¾Ð³Ð°',
  heading: 'ÐÐÐÐ',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Trainroadcard.propTypes = {
  text: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
}

export default Trainroadcard
