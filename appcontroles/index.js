import Mapmodel from '../models.js/model.js'

export async function PostPot(req,res){
    try{
    const {uploadig,langitude,latitude,message}=req.body
    const user=new Mapmodel({uploadig,langitude,latitude,message})
    console.log(user)
    user.save()
    .then(()=>{
        res.status(200).send({msg:"data post successfull"})})
    .catch(()=>{
        res.status(409).send({err:"unsuccessfull data post"})})
    }
    catch(err){
        res.status(402).send({error:err})
    }
    

}
export async function GetPost(req,res){
    try{
        const data=await Mapmodel.find()
        res.send({data:data})

    }
    catch(err){
        res.send({error:err})
    }
}
