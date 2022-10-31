export const BDD = async() =>{
    const response = await fetch ('/json/stock.json')
    const stock = await response.json()
return stock
}
