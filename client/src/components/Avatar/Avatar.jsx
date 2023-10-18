import React  from 'react'


    const Avatar = ({
      children,
      backgroundColor,
      px,
      py,
      color,
      borderRadius,
      fontSize,
      textAlign,
      cursur
       }) => {
      const style = {
        backgroundColor,
        padding: `${py} ${px}`,
        color: color || 'black',
        borderRadius,
        fontSize,
        textAlign: "center",
        cursur: cursur || null
        
        
      }
    
      return( <div style={style}>
        {children}
        </div>
      )
    }
    
    export default Avatar
    
      
