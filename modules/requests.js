
async function fetchCountry(countryName){
 const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  
 try{
   const response = await fetch(url)
   return response
 }catch(err){
    return {status:"fail",message:err.message}
 }
}

export {fetchCountry}