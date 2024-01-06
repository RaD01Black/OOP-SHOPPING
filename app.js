import { fetchData } from "./utils/httpreq.js";

 async function render() {
    const productsData = await fetchData();
    console.log(productsData)  
}

document.addEventListener("DOMContentLoaded" ,render);
