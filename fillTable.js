// Create a function to calculate the table values
let fillTable = function () {

  if (rowCounter === 2) {

    total.value = quantity.value * unity_price.value
    total_HT.value = quantity.value * unity_price.value
    taxes_total.value = parseFloat((total_HT.value) * 20 / 100)
    total_TTC.value = parseFloat(total_HT.value) + (parseFloat(total_HT.value) * 20 / 100)

  } else if (rowCounter > 2) {

    let table = []

    for (let i = 2; i < main_table.rows.length; i++) {

      if (document.getElementById(`quantity${i}`).value != "" && document.getElementById(`unity_price${i}`).value != "") {

        document.getElementById(`total${i}`).value = document.getElementById(`quantity${i}`).value * document.getElementById(`unity_price${i}`).value
        table.push(document.getElementById(`total${i}`).value)
      }
    }

    let sum = 0

    for (let j = 0; j < table.length; j++) {

      sum += parseFloat(table[j])

    }

    total.value = quantity.value * unity_price.value
    total_HT.value = parseFloat(total.value) + sum
    taxes_total.value = parseFloat((total_HT.value) * 20 / 100)
    total_TTC.value = parseFloat(total_HT.value) + (parseFloat(total_HT.value) * 20 / 100)

  }
}