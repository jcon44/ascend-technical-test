// import { json } from '@sveltejs/kit'

// export async function load({}) {
//     try {
//         const response = await fetch('http://internal-geoloc-inter-8wr50lrcoaiz-584372369.us-east-2.elb.amazonaws.com/polygons/api/multipolygon/43204,43210,43201', {
//             method: 'GET',
//             headers: {
//                 "content-type": "application/json"
//             }
//         })
    
//         const zipCodes = await response.json()
//         return { status: 200, zipCodes }
//     } catch (err) {
//         throw new Error(err)
//     }
// }