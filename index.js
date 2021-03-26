const btn_table = document.getElementById('btn_table')
const btn_table2 = document.getElementById('btn_table2')
const main_table = document.getElementById('main_table')
const total = document.getElementById('total1')
const total_HT = document.getElementById('total_HT')
const total_TTC = document.getElementById('total_TTC')
const taxes_total = document.getElementById('taxes_total')
const unity_price = document.getElementById('unity_price')
const quantity = document.getElementById('quantity')
const service = document.getElementById('service')
let rowCounter = 2
let ref1, ref2, ref3 = false

// Creating button class
class btn {

  add() {
    addLine()
  }

  delete() {
    deleteLine()
  }
}


// Creating button
let btn_switch = new btn


btn_table.addEventListener('click', () => {

  btn_switch.add()

})

btn_table2.addEventListener('click', () => {
  btn_switch.delete()
})

//Make the table dynamic
document.addEventListener('keyup', () => {
  fillTable()
  verify()
})
document.addEventListener('click', () => {
  fillTable()
  verify()
})
