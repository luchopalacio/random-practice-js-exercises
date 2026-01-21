const spinalCase = text => {
  return text
            .replace(/([a-z])([A-Z])/g, "$1-$2")    //reemplaza los camelCase: buenDia -> buen-Dia
            .replace(/[\s_-]+/g, "-")   //reemplaza los espacios y guiones bajos y medios: hola mundo: -> hola-mundo
            .toLowerCase();     //pasa todo a minusculas
};

