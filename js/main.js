let row = document.querySelector(".tbl1")
let btn = document.querySelector(".btn1")
let inp1 = document.querySelector(".inp1")
let inp2 = document.querySelector(".inp2")
let inp3 = document.querySelector(".inp3")
let inp4 = document.querySelector(".inp4")
let inp5 = document.querySelector(".inp5")

function add(){
    row.innerHTML=""
    massiv.map((item,index) =>{

        let tbody= document.createElement("tbody")
        
        let tr = document.createElement("tr")

        let th = document.createElement("th")
        th.textContent = item.name
        
        let td = document.createElement("td")
        td.textContent = item.tashkilot
        let td1 = document.createElement("td")
        td1.textContent = item.number
        let td2 = document.createElement("td")
        td2.textContent = item.email
        let td3 = document.createElement("td")
        td3.textContent = item.group

        let btn = document.createElement("button")
        btn.setAttribute("onclick",`ozgar(${index})`)
        if(item.status == "false"){
            btn.classList.add("btn","btn-outline-success")
            btn.textContent="Active"   
        }else if(item.status == "true"){
            btn.classList.add("btn","btn-outline-danger")
            btn.textContent="Inactive"
        }
        btn.classList.add("btn","btn-outline-success")
        let td4 = document.createElement("td")
        td4.appendChild(btn)
        tr.appendChild(th)
        tr.appendChild(td)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4 )
        tbody.appendChild(tr)
        row.append(tbody)
    })
}

function ozgar(son){
    if(massiv[son].status == "false"){
        massiv[son].status = "true"
    }else{
        massiv[son].status = "false"
    }
    add()
}
function qidir(nimadir){
    let natija = massiv.filter(item =>{
        return item.name.toLowerCase().includes(nimadir.toLowerCase())
    })
    row.innerHTML=""
    natija.forEach(item => {

        let tbody= document.createElement("tbody")
        
        let tr = document.createElement("tr")

        let th = document.createElement("th")
        th.textContent = item.name
        
        let td = document.createElement("td")
        td.textContent = item.tashkilot
        let td1 = document.createElement("td")
        td1.textContent = item.number
        let td2 = document.createElement("td")
        td2.textContent = item.email
        let td3 = document.createElement("td")
        td3.textContent = item.group
        tr.appendChild(th)
        tr.appendChild(td)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tbody.appendChild(tr)
        row.append(tbody)
    })
}
function sarala(val){
    if(val == "all"){
        bos()
    }else{
        let natija = massiv.filter(item =>{
            return item.status == val
        })
        chiz(natija)
    }
}
function run(bir){
    row.innerHTML=""
    bir.map((item,index) =>{

        let tbody= document.createElement("tbody")
        
        let tr = document.createElement("tr")

        let th = document.createElement("th")
        th.textContent = item.name
        
        let td = document.createElement("td")
        td.textContent = item.tashkilot
        let td1 = document.createElement("td")
        td1.textContent = item.number
        let td2 = document.createElement("td")
        td2.textContent = item.email
        let td3 = document.createElement("td")
        td3.textContent = item.group
        let btn = document.createElement("button")
        btn.setAttribute("onclick",`ozgar(${index})`)
        if(item.status == "false"){
            btn.classList.add("btn","btn-outline-success")   
        }else if(item.status == "true"){
            btn.classList.add("btn","btn-outline-danger")
        }
        btn.classList.add("btn","btn-outline-success")
        btn.textContent="active"
        let td4 = document.createElement("td")
        
        td4.appendChild(btn)
        tr.appendChild(th)
        tr.appendChild(td)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4 )
        tbody.appendChild(tr)
        row.append(tbody)
    })
}


function qosh(){
    row.innerHTML = ""

    let object_mas = {
        name: inp1.value,
        ish: inp2.value,
        tel:inp3.value,
        email: inp4.value,
        guruh:inp5.value
    }
    massiv.unshift(object_mas)

    add()
}
