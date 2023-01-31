
const Search=(props)=>{
    console.log(props);
    return(
        <div>
            <ul>
            {props.searched.map((item)=>{
                return (
                    <li key={item} >{item}</li>
                )
            })}
            </ul>
        </div>
    )
}
export default Search