import { useParams } from "react-router-dom"
import { product } from "./Effect";

const Details=()=>{

    const {id}=useParams()
  const data = product.find(
        (item) => item.id === Number(id)
    );
    return(
        <div>
            <img src={data.img} alt="" />
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <span>{data.price}</span>
        </div>
    )
}
export default Details