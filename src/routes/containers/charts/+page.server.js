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
		fiscal_year__range: [`2018`, '2024'],
		board_name: boardName,
	}
    if (hasAccess || skip_auth) {
        try {
            const filterResp = await fetch(`${env.DATA_WAREHOUSE_BASE_URL}/api/dashboard/filters/medicaid/demographics`, {
                method: 'POST',
                body: JSON.stringify(filters),
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${env.DATA_WAREHOUSE_TOKEN}`,
                },
            })
    
            const demoFilters = await filterResp.json()
    
            const resp = await fetch(`${env.DATA_WAREHOUSE_BASE_URL}/api/dashboard/medicaid/demographics/count/timeseries`, {
                method: 'POST',
                body: JSON.stringify(filters),
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${env.DATA_WAREHOUSE_TOKEN}`,
                },
            })
    
            const boardDemographics = await resp.json()
    
            return { boardDemographics, demoFilters }
        } catch (err) {
            throw new Error(err)
        }
    } else {
        return {}
    }
}