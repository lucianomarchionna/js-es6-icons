const icon = [
  {
    name: 'cat',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'crow',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dog',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dove',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dragon',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'horse',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'hippo',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'fish',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'carrot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'apple-alt',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'lemon',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'pepper-hot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'user-astronaut',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-graduate',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-ninja',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-secret',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
];

const colors = [
  "blue",
  "orange",
  "purple"
]

const iconsContainer = document.getElementById('icon');

// console.log

const coloredArray = colorIcon(icon, colors);
print (coloredArray, iconsContainer);

// funzioni

function print(array, container){
  container.innerHTML = " ";
  array.forEach((element) => {
    // console.log(element.name);
    const {name, family, prefix, color} = element;
    iconsContainer.innerHTML += `
    <div>
      <i class="${family} ${prefix + name}" style="color: ${color}"></i>
      <div class="undertitle">${name.toUpperCase()}</div>
    </div>
    `
  });
}

function colorIcon(array, colors){
  const types = getTypes(array);
  // console.log(types);

  const coloredArray = array.map((element) => {
    const indexType = types.indexOf(element.type);
    console.log(indexType);

    element.color = colors[indexType];
    return element;
  })
  return coloredArray;
}

function getTypes(array){
  const types = [];

  array.forEach((element) => {
    console.log(element.type);
    if(!types.includes(element.type)){ //il ! è come se scrivi == false
      types.push(element.type);
    }
  });
  return types;
}