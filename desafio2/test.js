const Contenedor = require("./desafio2");

const productos = new Contenedor("productos.txt");

const test = async () => {
  let save = await productos.save({
    title: "coder",
    price: 1234,
    thumbnail: "foto",
  });
  let getAll = await productos.getAll();
  //let getById = await productos.getById(2);
  //let deleteById = await productos.deleteById(3);
  //let deleteAll = await productos.deleteAll();
  console.log(save);
  //console.log(getAll);
  //console.log(getById);
  //console.log(deleteById);
  //console.log(deleteAll);
};

test();
