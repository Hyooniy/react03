
(function(){
    //작업
    
function ProImg({color}){
    console.log(color)
    return(
        <img src ={ `../images/${color}.jpg`} alt = {'${color}'} />
    )
}

function ProColor({colors, color , hColorChange}){
    function optionColor(){
        return colors.map((item,index) => {
            return (
        <option value={item} key={index}>{item}</option>)}
        )
    }
    function onColorChange(event){
       // console.log(event.target.value)
       hColorChange(event.target.value)
    }
    return(
        <p className="form">
                <label htmlFor = "color"> color : </label>
                <select id = "color"  defaultValue = {color}
                onChange = {onColorChange}>
                    {optionColor()}
                </select>
        </p>
    )

}    

function ProSize({sizes,size,hSizeChange}){
    function optionSize(){
        return sizes.map((item,index) =>{
            return (
        <option value={item} key={index}>{item}</option>)}
        )
    }
    function onSizeChange(event){
        hSizeChange(event.target.value)
    }
    return(
        <p className ="form">
                <label htmlFor = "size"> size : </label>
                <select id = "size" defaultValue = {size}
                onChange = {onSizeChange}>
                        {optionSize()}
                    </select>
            </p>
    )
}
function App(){
    //state
    const [color,setColor] = React.useState('blue');
    const [colors,setColors] = React.useState(window.data.AllColor);
    const [size,setSize] = React.useState(10);
    const [sizes,setSizes] = React.useState(window.data.AllSize);
    console.log(colors)
    //color 변경 -> setColor,color => sizes
    function hColorChange(selectColor){
        const ableSize = window.data.byColor[selectColor];
        setSizes(ableSize);
        setColor(selectColor);
    }
    function hSizeChange(selectSize){
        const ableColor = window.data.bySize[selectSize];
        setSize(selectSize);
        setColors(ableColor);
    }
    return (
       <div className ="custom">
        <div className ="pic">
        <ProImg color={color}/>
        </div>
        <div className ="selector">
        <ProColor 
        color={color}
        colors={colors}
        size={size}
        sizes={sizes}
        hColorChange = {hColorChange}
         />
        <ProSize 
        color={color}
        colors={colors}
        size={size}
        sizes={sizes}
        hSizeChange = {hSizeChange}/>
        </div>
       </div>
    )
}
//export

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
)
})()
