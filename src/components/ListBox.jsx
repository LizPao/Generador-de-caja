import React from 'react'
/*import styled from 'styled-components'*/

const ListBox = ({ colorbox }) => { 
    
    
    return (
        
        /*<ColorBox color={colorbox}>{colorbox}</ColorBox>*/
        <p>{colorbox.map( (newcolor, index)=> <h6 className={newcolor} key={index} > {newcolor}</h6>)}</p>
    )
};

/*const ColorBox =styled.div`
    display: flex;
    width: 200px;
    height: 200px;
    margin: 10px;
background-color: ${(props) => props.color};`*/
export default ListBox;