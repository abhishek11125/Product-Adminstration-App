
let data = JSON.parse(localStorage.getItem('Products'));

document.querySelector('h1>p').innerText = data.length;

let container = document.getElementById('main');
container.innerHTML = null;

data.forEach((el,i)=> {

    let box = document.createElement('div')
    box.setAttribute('class','product');

    let pic = document.createElement('img');
    pic.src = el.image;

    let name = document.createElement('h3')
    name.innerText = el.name;

    let category = document.createElement('p');
    category.innerText = el.category;

    let price = document.createElement('h3')
    price.innerText = `${'₹'+ el.price}`

    let gender = document.createElement('p')
    gender.innerText = el.gender;

    let btn1 = document.createElement('button');
    btn1.innerText = 'Remove';
    btn1.addEventListener('click',function(){
        deleteItem(i)
    })

    let btn2 = document.createElement('button')
    btn2.innerText = 'Sold'

    let sold = el.sold;
    if(sold=='true'){
        btn2.style.backgroundColor = 'red';
    }else if(sold=='false'){
        btn2.style.backgroundColor = 'green';
    }

    btn2.addEventListener('click',function(){
        checkCondition(el,i);
    })
    
    box.append(pic,name,price,category,gender,btn1,btn2)

    container.append(box)

});


function checkCondition(e,i){
    if(e.sold==='true'){
        data[i].sold='false';
    }else if(e.sold==='false'){
        data[i].sold = 'true';
    }
    localStorage.setItem('Products',JSON.stringify(data));
    window.location.reload();
}

function deleteItem(i){
    
    data.splice(i,1)
    localStorage.setItem('Products',JSON.stringify(data));
    window.location.reload();
}