import ReadTable from "./class/ReadTable.js"


const table = new ReadTable()
const data = await table.getData()

console.log(data)