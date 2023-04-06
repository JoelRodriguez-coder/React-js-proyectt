
const ColorPicker= ({setColor,options}) =>{

    const handleSelect = (e) => {
        setColor(e.target.value)
    }

    return(
       <select className="d-flex my-3" onChange={handleSelect} defaultValue="blanco">
            {
                options.map((opt)=> (
                    <option key={opt.value} value={opt.value}> {opt.label}</option>
                ))
            }
       </select>
    )
}

export default ColorPicker