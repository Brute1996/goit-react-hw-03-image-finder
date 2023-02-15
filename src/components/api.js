import axios from "axios";

const URL = 'https://pixabay.com/api/';

export const getImages = async (imageName, pageNumber) => {
    try {
        return await axios.get(URL, {
        params: {
            key: '32278490-2dbba53cd6748a66599a7e56e',
            q: imageName,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
            page: pageNumber,
        }
    })
    } catch (error) {
      console.log(error);  
    }
};
