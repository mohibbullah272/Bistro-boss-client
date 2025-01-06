import { useForm } from "react-hook-form";
import SharedTitles from "../../../../components/SharedTitles";
import { uploadImage } from "../../../../Hooks/uploadImg";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useState } from "react";
import Loading from "../../../Loading/Loading";


const AddItem = () => {
    const axiosSecure = useAxiosSecure()
    const [loading,setLoading]=useState(false)
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm()
      const onSubmit = async(data) => {
        const imgUrl = data.image[0]

try{
    setLoading(true)
    const image = await uploadImage(imgUrl)
    const menuData={
        name:data.name,
        image,
        category:data.category ,
        recipe:data.recipe ,
        price:data.price
    }
    await axiosSecure.post('/menu',menuData)
}catch(err){
    console.log(err)
}finally{
    setLoading(false)
    toast.success('menu successfully uploaded')
    reset()
}
      }
      if(loading){
        return <Loading></Loading>
      }
    return (
        <div>
       <SharedTitles title={"what's new?"} subtitle={'Add Item'}></SharedTitles>
       <div className="bg-[#F3F3F3] p-5">
<form onSubmit={handleSubmit(onSubmit)}>
<div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Name</span>
          </label>
          <input type="text" {...register('name')} placeholder="Recipe Name" className="input input-bordered" required />
        </div>
  <div className="flex gap-8">
  <label className="form-control w-1/2 max-w-xs">
  <div className="label">
    <span className="label-text">Category</span>
  </div>
  <select {...register('category')} className="select select-bordered">
    <option disabled selected >Chose one</option>
    <option>Salad</option>
    <option>Pizza</option>
    <option>Soup</option>
    <option>Dessert</option>
    <option>Drink</option>
  </select>
</label>
<div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input {...register("price")} type="text" placeholder="Price" className="input  input-bordered" required />
        </div>
  </div>
  <label className="form-control">
  <div className="label">
    <span className="label-text">Food Recipe</span>
  </div>
  <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Food Recipe"></textarea>
</label>
<input {...register('image')} type="file" className="file-input mt-5 w-full max-w-xs" />
<input type="submit" className="block btn text-white bg-gradient-to-r from-[#835D23] to-[#B58130] px-8 my-5" value={'Add Item'}/>
</form>


       </div>
        </div>
    );
};

export default AddItem;