export default class {
    async getData() {
        const spreadsheetID = '1UrHT7w4RPCxwfzl6F7sugqd5gfGDN5rXYKPO0Ze0zCc'
        const url = `https://docs.google.com/spreadsheets/d/${spreadsheetID}/gviz/tq?tqx=out:json`
        let data = await fetch(url)
            .then(res => res.text())
            .then(text => JSON.parse(text.substr(47).slice(0, -2)))
        return data
    }
}