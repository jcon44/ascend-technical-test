export default function paginateTable(data, direction, pageSize = 10) {
    if (direction === 'previous') {
        if (data.currentPage !== 1) {
            data.leftIndex -= pageSize
            data.rightIndex -= pageSize
            data.currentPage -= 1
            data.tableData = data.tableData.map((el, i) => {
                if (i >= data.leftIndex && i <= data.rightIndex) {
                    el.display = true
                } else {
                    el.display = false
                }
                return el
            })
        }
    }

    if (direction === 'next') {
        if (data.currentPage < data.totalPages) {
            data.leftIndex += pageSize
            data.rightIndex += pageSize
            data.currentPage += 1
            data.tableData = data.tableData.map((el, i) => {
                if (i >= data.leftIndex && i <= data.rightIndex) {
                    el.display = true
                } else {
                    el.display = false
                }
                return el
            })
        }
    }

    return data
}