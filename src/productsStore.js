//Coffee:prod_Qmzqvv3WYc8L9w
//Sunglasses:prod_QmzsdgL8OaQrxz
//Camera:prod_QmzuXBsDiYfLR6

const productsArray=[
    {
        id:"prod_Qmzqvv3WYc8L9w",
        title:"Coffee",
        price:190
    },

    {
        id:"prod_QmzsdgL8OaQrxz",
        title:"Sunglasses",
        price:799
    },

    {
        id:"prod_QmzuXBsDiYfLR6",
        title:"Camera",
        price:8300
    }
];

function getProductData(id){
    let productData=productsArray.find(product=>product.id===id);

    if(productData===undefined){
        console.log("Product data does not exist for ID: "+id);
    }

    return productData;
}

export {productsArray,getProductData};