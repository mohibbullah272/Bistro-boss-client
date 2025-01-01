import axios from "axios"

export const uploadImage=async(img)=>{
    const imgForm = new FormData()
    imgForm.append('image',img)
    const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_API}`,
        imgForm
    )
    return data.data.display_url

}