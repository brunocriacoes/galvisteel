export default class {
    async getData() {
        const spreadsheetID = '1UrHT7w4RPCxwfzl6F7sugqd5gfGDN5rXYKPO0Ze0zCc'
        const url = `https://docs.google.com/spreadsheets/d/${spreadsheetID}/gviz/tq?tqx=out:json`
        let data = await fetch(url)
            .then(res => res.text())
            .then(text => JSON.parse(text.substr(47).slice(0, -2)))
        return this.adapter(data)
    }
    adapter(data) {
        let cols = data.table.cols.map(c => c.label)
        let rows = data.table.rows.map(r => r.c.map(r1 => r1.v))
        rows = rows.map(e => {
            let data = {}
            cols.forEach((k, i) => {
                data[k] = e[i]
            });
            return data
        })
        return rows
    }
}