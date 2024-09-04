//sk_test_51PvPgiP8ypy8nNs7kbXA0Epl5J4KibHyMXIzTBpgzB61OONZ6xlIuixx8OCn9T7puUw1w41Fsizo7VX77XxnR84g00uiVbwsYm

//Coffee:prod_Qmzqvv3WYc8L9w
//Sunglasses:prod_QmzsdgL8OaQrxz
//Camera:prod_QmzuXBsDiYfLR6

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51PvPgiP8ypy8nNs7kbXA0Epl5J4KibHyMXIzTBpgzB61OONZ6xlIuixx8OCn9T7puUw1w41Fsizo7VX77XxnR84g00uiVbwsYm');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout",async(req,res)=>{
    /*
    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session=await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"

   });

   res.send(JSON.stringify({
     url:session.url
   }));

});

app.listen(4000,()=>console.log("Listening to port 4000!"));