import axios from "axios";

export default async function uploadImage(image: File) {
  const preset_key = "k2qzc4or";
  const preset_name = "dnq1hgigs";
  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${preset_name}/image/upload`;
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", preset_key);

  const response = await axios.post(cloudinaryUrl, formData);

  return response.data.url;
}
