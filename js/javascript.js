let items = localStorage.getItem('itemList')
// let items = JSON.parse()
items = items ? items.split(',') : []
// let itemslist = items ? JSON.parse(items) : [];
showItems()


function addItems() {
    let item = document.getElementById('item').value
    let quantity = document.getElementById('quantity').value
    if(item){
        items.push({name: item , quantity: quantity})
        // itemslist.push({ name: item, quantity: quantity });
        showItems()
    }


}

function showItems() {
    document.getElementById('item').value =''
    document.getElementById('quantity').value =''

    let html = ''

    for (let index = 0; index < items.length; index++) {
        html+= `<div class="col-5">${items[index].name} </div>`
        html+= `<div class="col-5">${items[index].quantity} </div>`
        html+= `<div class="col-2"> <a href="#" class ="btn btn-danger" onclick="deleteItem(${index})">X</a> </div>`

        // html += `<div class="col-5"> ${items[index]} </div>`
        // html += `<div class="col-2"> <a href="#" class="btn btn-danger" onclick="deleteitem(${index})">X</a> </div>`
    
    }
    localStorage.setItem('itemList', items)
    document.getElementById('items').innerHTML = html
}

function deleteitem(items) {
    // console.log(item)
    items.splice(items, 1)
    showItems()
}

// localStorage.removeItem('itemList')
// localStorage.clear()