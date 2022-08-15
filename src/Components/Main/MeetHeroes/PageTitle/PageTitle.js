import React from 'react'

const PageTitle = (props) => {
    const { title } = props
    return (
        <>
            {title && title ? <h1 className="page-title">{title}</h1> : ''}
        </>
    )
}

export default PageTitle
