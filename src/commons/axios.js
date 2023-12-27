import axios from 'axios';

// const fetchData = async (url) => {
//     try {
//         const response = await axios.get(url)
//         return response
//     } catch (error) {
//         // console.error('error : ', error)
//     }
// }

const fetchData = async (url) => {
    try{
        const response = await axios.get(url);
        // if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        // console.log(response.json())
        console.log(response)
        return response
    } catch (error) {
        console.error('error : ' + error)
    }
}

export default fetchData;