import React, {useState} from 'react'


const InputData = (props) => {
    const {colorbox, setColorbox} = props;
    const [agregar, setAgregar] = useState("");

    const handleAgregar = (e) => setAgregar(e.target.value);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setColorbox([...colorbox, agregar]);
        setAgregar("");
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Color: </label>
                <input type="text" value = {agregar} onChange={handleAgregar} />
                <button type='submit'>Add</button>
            </div>
        </form>
    )
}
export default InputData;