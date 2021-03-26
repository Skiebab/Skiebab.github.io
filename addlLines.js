//Creating function to add lines
let addLine = function () {

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
    fillTable()
    rowCounter++
}

let deleteLine = function () {

    if (rowCounter > 2) {
        main_table.lastChild.remove()
    } else {
        return
    }

    fillTable()
    rowCounter--
}