import React, { cloneElement } from 'react'

export default props => {
  return (
    <div>
      { props.children.map((child, index) => cloneElement(child, { ...props, key: index })) }
    </div>
  )
}