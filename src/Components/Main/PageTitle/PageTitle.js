import React from 'react'

const PageTitle = (props) => {
    const { title, customColor } = props
    return (
        <>
            {title && title ? <h1 style={{ color: customColor && customColor ? customColor : '' }} className="page-title">{title}</h1> : ''}
        </>
    )
}

export default PageTitle
