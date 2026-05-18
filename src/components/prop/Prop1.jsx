import Child from "./Chiild";

const Prop1=({name,location,children})=>{
return(
    <div>
<h1>{name}</h1>
<p>{location}</p>
<p>hello word ufjhvmb</p>
<h1>{children}</h1>

<Child  name={name} location={location}  />
    </div>
)
}
export default Prop1;