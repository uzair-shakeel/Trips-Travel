
const CalculateAvg = reviews => {
  
    const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
    const avgRating = totalRating === 0 
    ? "Not Rated" : totalRating ===1 ? totalRating : (totalRating / reviews?.length).toFixed(1) 
   
    return {
    totalRating, avgRating
    }
}

export default CalculateAvg
