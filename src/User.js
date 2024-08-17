const User = ({ Information, Product, setProduct, setInformation }) => {
    const deleteProduct = (id) => {
      
      const updatedProducts = Product.filter((e) => e.id !== id);
      setProduct(updatedProducts);
      
     
      const updatedUserDetails = Information.filter((e) => e.id !== id);
      setInformation(updatedUserDetails);
    };
  
    return (
      <>
        <h1>Your Product Detail</h1>
        {Information.map((e) => (
          <div key={e.id}>
            <img src={e.image} alt={e.productName} className="product-image" />
            <h2 className="product-name">{e.title}</h2>
            <p className="product-info"><strong>Price</strong>: ${e.price}</p>
            <p className="product-info"><strong>Date</strong>: {e.purchaseDate}</p>
            <p className="product-info"><strong>Category</strong>: {e.category}</p>
            <p className="product-info"><strong>Address</strong>: {e.address}</p>
            <p className="product-info"><strong>Contact</strong>: {e.contact}</p>
            <button onClick={() => deleteProduct(e.id)}>Delete Your Product</button>
          </div>
        ))}
      </>
    );
  };
  
  export default User;
  