import React from 'react'
// import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ img, styleClass, title, children }) => {
  return (
    <BackgroundImage
      Tag="section"
      className={styleClass}
      fluid={img}
      backgroundColor={`#040e18`}
    >
      <h1 className='title text-white text-center display-2 fw-bold'>{title}</h1>
      {children}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: 'NatDev Coffee',
  styleClass: 'default-background'
}

// const StyledBackgroundSection = styled(BackgroundSection)`
//   width: 100%;
//   background-position: bottom center;
//   background-repeat: repeat-y;
//   background-size: cover;
// `

export default BackgroundSection