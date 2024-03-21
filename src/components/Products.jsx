import './Products.css'


const Products=(props)=>{
    
    return(
        <>
            <div >
                <div className="product-wrap">
                    <img src= {props.productImage} alt="product-image" />
                    <p>{props.productName}</p>
                    <h3>{props.productPrice}</h3>
                </div>
            </div>
        
        </>
    )
}
export default Products