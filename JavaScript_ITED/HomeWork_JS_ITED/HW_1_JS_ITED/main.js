  let int = 42;
  let bigInt = 123456789012345678901234567890123456789012345678901234567890;
  let str = 'Это маленькая строка';
  let obj = {
      name: 'Конастантин',
      lastname: 'Ковалев',
      age: 29
  };
  let und;
  let errorAge = null;
  let myFunc = (a, b) => {
      return a + b;
  }
  
  let age = prompt("Какая оценка?", 5);

  let welcome = (age < 5) ?
    () => alert('(((((((((((((((((((') :
    () => alert("Ха, спасибо!");

  welcome();

  let symb = Symbol(":3");

  let messanger = (message, variable, type = false) => {
    console.log(message, variable, 'type: ', typeof( type !== false ? type : variable ) )
  }

  messanger('В чем смысл жизни? ', int);
  messanger('BigInt: ', bigInt);
  messanger('string: ', str);
  messanger('object: ', obj);
  messanger('undefined: ', und);
  messanger('null: ', errorAge);
  messanger('function: ', myFunc);
  messanger('Boolean: ', true);
  messanger('Symbol: ', symb);
