import Axios from 'axios'
import API from "./api"
export  async function buyfollowers(quantity,link){
    try {
            let res = await Axios.post(API.TIKTOK_API , {
                key : API.TIKTOK_APIKEY,
                "action" : "add",
                "service" : API.BUY_FOLLOWERS_ID,
                "link" : link,
                "quantity" : quantity
            })

           console.log(res.data)
    } catch (err) {
        console.log(err)
    }
}
export async function buyLikes(link,likes){
    try {
        let res = await Axios.post(API.TIKTOK_API , {
            key : API.TIKTOK_APIKEY,
            "action" : "add",
            "service" : API.BUY_LIKES_ID,
            "link" : link,
            "quantity" : likes
        })

       console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}
export const orderStatus=async(id)=>{
    
        let res = await Axios.post(API.TIKTOK_API , {
            key : API.TIKTOK_APIKEY,
            "action" : API.ORDER_STATUS,
            "service" : API.BUY_LIKES_ID,
            "order" : id,
        })

      return(res.data)
   
}