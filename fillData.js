//Fetch data and fill table
let reference = []
let description = []
let price = []
let quant = []
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn1State = true
let btn2State = true
let btn3State = true


fetch('data.json')
    .then(res => {
        return (res.json())
    })
    .then(data => {
        data.forEach(element => {
            reference.push(element.reference)
            description.push(element.description)
            price.push(element.prix)
            quant.push(element.quantité)
        })

        service.addEventListener('click', () => {
            document.querySelector('.popup').style = 'display: flex;'
        })

        let verify = function() {

                if (document.getElementById('specif')) {

                    btn1State = false

                } else {

                    btn1State = true
                }

                if (document.getElementById('specif1')) {

                    btn2State = false

                } else {
                    
                    btn2State = true
                }

                if (document.getElementById('specif2')) {

                    btn3State = false

                } else {

                    btn3State = true
                }
        }

        let createRow = function() {
            
        }

        btn1.addEventListener('click', () => {
            document.querySelector('.popup').style = 'display: none;'
            verify()
            if (btn1State == true) {
                let newRow = document.createElement(`tr`)
                newRow.innerHTML = `<td>
                                        <input type="text" name="reference" id="reference${rowCounter}" placeholder="Référence">
                                    </td>
                                    <td>
                                        <textarea name="description" id="description${rowCounter}" cols="25" rows="1"></textarea>
                                    </td>
                                    <td>
                                        <input type="number" name="quantity" id="quantity${rowCounter}" placeholder="Quantité">
                                    </td>
                                    <td> 
                                        <input type="number" name="unity_price" id="unity_price${rowCounter}" placeholder="Prix unitaire">
                                    </td>
                                    <td>
                                        <input type="number" name="total" id="total${rowCounter}" placeholder="Total">
                                    </td>`
                main_table.appendChild(newRow)
                document.getElementById(`reference${rowCounter}`).value = reference[0]
                document.getElementById(`description${rowCounter}`).value = description[0]
                document.getElementById(`quantity${rowCounter}`).value = quant[0]
                document.getElementById(`unity_price${rowCounter}`).value = price[0]
                newRow.id = "specif"
                fillTable()
                rowCounter++
            }
        })

        btn2.addEventListener('click', () => {
            document.querySelector('.popup').style = 'display: none;'
            verify()
            if (btn2State == true) {
                let newRow = document.createElement(`tr`)
                newRow.innerHTML = `<td>
                                        <input type="text" name="reference" id="reference${rowCounter}" placeholder="Référence">
                                    </td>
                                    <td>
                                        <textarea name="description" id="description${rowCounter}" cols="25" rows="1"></textarea>
                                    </td>
                                    <td>
                                        <input type="number" name="quantity" id="quantity${rowCounter}" placeholder="Quantité">
                                    </td>
                                    <td> 
                                        <input type="number" name="unity_price" id="unity_price${rowCounter}" placeholder="Prix unitaire">
                                    </td>
                                    <td>
                                        <input type="number" name="total" id="total${rowCounter}" placeholder="Total">
                                    </td>`
                main_table.appendChild(newRow)
                document.getElementById(`reference${rowCounter}`).value = reference[1]
                document.getElementById(`description${rowCounter}`).value = description[1]
                document.getElementById(`quantity${rowCounter}`).value = quant[1]
                document.getElementById(`unity_price${rowCounter}`).value = price[1]
                newRow.id = "specif1"
                fillTable()
                rowCounter++
                btn2State = false
            }
        })

        btn3.addEventListener('click', () => {
            document.querySelector('.popup').style = 'display: none;'
            verify()
            if (btn3State == true) {
                let newRow = document.createElement(`tr`)
                newRow.innerHTML = `<td>
                                        <input type="text" name="reference" id="reference${rowCounter}" placeholder="Référence">
                                    </td>
                                    <td>
                                        <textarea name="description" id="description${rowCounter}" cols="25" rows="1"></textarea>
                                    </td>
                                    <td>
                                        <input type="number" name="quantity" id="quantity${rowCounter}" placeholder="Quantité">
                                    </td>
                                    <td> 
                                        <input type="number" name="unity_price" id="unity_price${rowCounter}" placeholder="Prix unitaire">
                                    </td>
                                    <td>
                                        <input type="number" name="total" id="total${rowCounter}" placeholder="Total">
                                    </td>`
                main_table.appendChild(newRow)
                document.getElementById(`reference${rowCounter}`).value = reference[2]
                document.getElementById(`description${rowCounter}`).value = description[2]
                document.getElementById(`quantity${rowCounter}`).value = quant[2]
                document.getElementById(`unity_price${rowCounter}`).value = price[2]
                fillTable()
                newRow.id = "specif2"
                rowCounter++
                btn3State = false
            }
        })

    })

