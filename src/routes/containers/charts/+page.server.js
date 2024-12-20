import { env } from '$env/dynamic/private'
import { env as publicEnv } from '$env/dynamic/public'

export async function load({ locals }) {
    let hasAccess = locals.has_access
	let skip_auth = publicEnv.PUBLIC_SKIP_AUTH == undefined ? false : JSON.parse(publicEnv.PUBLIC_SKIP_AUTH)
	let boardName = locals.board_name == undefined && skip_auth ? 'montgomery_county' : locals.board_name

	let today = new Date()
	const year = today.getFullYear()
	const month = today.getMonth() + 1
	const date = today.getDate()


    const filters = {
		admit_time__range: [`${year - 1}-${month}-${date}`, `${year}-${month}-${date}`],
		board_name: boardName,
	}
    if (hasAccess || skip_auth) {
        try {
            const resp = await fetch(`${env.DATA_WAREHOUSE_BASE_URL}/api/dashboard/encounters/count/timeseries`, {
                method: 'POST',
                body: JSON.stringify(filters),
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${env.DATA_WAREHOUSE_TOKEN}`,
                },
            })
            
            const encounters = await resp.json()

            encounters['total_count'] = Number(encounters['total_count']).toLocaleString()
			encounters['time_series'].map((el) => {
				el.series = 'Behavioral Health Encounters'
				el.value = Number(el.value)
				return el
			})
    
            return encounters
        } catch (err) {
            throw new Error(err)
        }
    } else {
        return {}
    }
}