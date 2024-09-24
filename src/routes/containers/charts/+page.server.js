export async function load({}) {
    try {
        const chartZips = [
            {
                zip: '43210',
                count: 10
            },
            {
                zip: '43204',
                count: 20
            },
            {
                zip: '43201',
                count: 15
            },
            {
                zip: '43215',
                count: 13
            },
            {
                zip: '43212',
                count: 7
            }
        ]
        let zips = []
        chartZips.forEach((el) => zips.push(el.zip))
        const response = await fetch(`http://geo.internal.prod-hipaa.ascend-innovations.com/polygons/api/multipolygon/${zips.join(',')}`, {
            method: 'GET',
            headers: {
                "content-type": "application/json"
            }
        })

        // const zips = await fetch('https://data-warehouse.internal.prod-hipaa.ascend-innovations.com/api/dashboard/encounters/count/zip', {
        //     method: 'POST',
        //     headers: {
        //         "content-type": "application/json",
        //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMzMDUwODQzLCJpYXQiOjE3MjUyNzQ4NDMsImp0aSI6IjZkNDI1YjFjNmJmNDQ3ODhiNTIzN2EwZDE1NjdhNmYwIiwidXNlcl9pZCI6MX0.fDvbpFjMm1I6gdCa7uTX2yMcy6LmQKx7EvaPjkytrEk'
        //     }
        // })

        // const chartZips = await zips.json()
    
        const zipCodes = await response.json()

        // find average count and assign geojsonoptions based on this
        let totalCount = chartZips.reduce((acc, el) => acc + el.count, 0)
        const avg = totalCount / chartZips.length

        zipCodes.map((el) => {
            for (let zip of chartZips) {
                if (el.properties['zip_code'] === Number(zip.zip)) el.count = zip.count
            }
            if (el.count > avg) {
                el.options = {
                    radius: 4,
                    fillColor: 'var(--primary-base)',
                    color: 'var(--primary-base',
                    weight: 2,
                    opacity: 1,
                    fillOpacity: 0.6
                }
            } else {
                el.options = {
                    radius: 4,
                    fillColor: 'var(--primary-300)',
                    color: 'var(--primary-base)',
                    weight: 2,
                    opacity: 1,
                    fillOpacity: 0.6
                }
            }
            return el
        })
        return { zipCodes }
    } catch (err) {
        throw new Error(err)
    }
}