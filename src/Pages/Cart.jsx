import { useSelector,useDispatch } from "react-redux"
import { remove } from "../Store/cartSlice";
export default function Cart(){
    let items=useSelector((store)=>store.cart);
    let dispatch= useDispatch();
    let handleRemove=(productId)=>{
        dispatch(remove(productId))
    }
    return(
        <div className="cartWrapper">
            {items.map((item)=>{
                return (
                <div className="cartCard" key={item.id}>
                    <img src={item.image} alt="" />
                    <h6>{item.title}</h6>
                    <h5>{item.price*78} ₹</h5>
                    <button className="remove-btn" onClick={()=>handleRemove(item.id)}>Remove from Cart</button>
                </div>
                );
            })}
        </div>
    )
}