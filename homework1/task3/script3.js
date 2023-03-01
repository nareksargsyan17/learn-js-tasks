class Product{
    constructor(name, price, quantity, description){
        this.name = name
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
    review(obj){
        let keys = Object.keys(obj)
        for(let i=0; i<keys.length; i++){
            if(!obj[keys[i]]){
                return 0;
            }
        }
        return 1;
    }
}
function strToObj(...string){
    let arr = [...string];
    let resultArr = [];
    arr.map((str,index) =>{
        let res = str.match(/\d+/g);
        str = str.replace(/\b-contains-\b|\b-ends-\b|\b-starts-\b/g, '":"');
        str = str.replace(/\b->\b|\b-<\b|\b-=\b|\b->=\b|\b-<=\b/g, '":"');
        str = str.replace(/[&]/g, '","');
        str = str.replace(str,`{"${str}"}`);
        for(let i = 0; i < res.length; i++){
            str = str.replace(`"${res[i]}"`, +res[i]);
        }
        let prod = new Product(...Object.values(JSON.parse(str)));
        if(prod.review(prod)){
            resultArr.push(prod);
        }
    })
    return resultArr;
}
console.log(strToObj("name-contains-fd&price-=25&quantity->5&description-ends-abc","name-starts-fd&quantity-=5"));