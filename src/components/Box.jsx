import React, { useState } from 'react'
import InputData from './InputData';
import ListBox from './ListBox';


const Box = () => {
    const [colorbox, setColorbox] = useState([]);
    return (
        <>
            <InputData colorbox={colorbox} setColorbox = {setColorbox}/>
            <ListBox colorbox={colorbox}/>
        </>
    )
}
export default Box;