import axios from "axios";

const root = "https://makeup-api.herokuapp.com/api/v1"

export const bringProducts =  async () => {

    return await axios.get(`${root}/products.json`)
}