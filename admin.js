let arr = JSON.parse(localStorage.getItem('Products')) || [];


function ProductData(event) {
  event.preventDefault();

  let form = document.querySelector("form");

  let name = form.name.value;

  let category = form.category.value;

  let pic = form.image.value;

  let price = form.price.value;

  let gender = form.gender.value;

  let condition = form.sold.value;

  let data = new proData(name, category, pic, price, gender, condition);
  arr.push(data);
  localStorage.setItem('Products',JSON.stringify(arr));

  window.location.reload()
}

function proData(n, c, i, p, g, co) {
  this.name = n;
  this.category = c;
  this.image = i;
  this.price = p;
  this.gender = g;
  this.sold = co;
}
