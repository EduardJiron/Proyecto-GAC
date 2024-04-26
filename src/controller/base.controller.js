//importo las utilidades
const { handleResponse } = require("../utilities/funciones");

//Este es un Crud Generico, Es capaz de insertar y actualizar cualquier modelo
//se usa para evitar codigo repetido en los controller
exports.handleRegistroGenerico = async (res, Model, data, id_params) => {
  try {
    //se verifica si exite el parametro id, si existe indica que se desea actualizar
    if (id_params) {
      //se crea un objeto clausula vacio
      const whereClausula = {};
      //se inserta el nombre de la llave primaria del modelo y se inicializa con el parametro enviado
      whereClausula[Model.primaryKeyAttribute] = id_params;
      //se usa el metodo update de sequelize y se define la clausula where (id_carrera=id_params)
      await Model.update(data, { where: whereClausula });
      handleResponse(res, 200, "editado con exito");

      // en caso contrario si no existe id_params indica que se requiere insertar
    } else {
      // se usa el metodo create de sequelize, y se pasa el modelo como parametro
      await Model.create(data);
      handleResponse(res, 201, "creado con exito");
    }
  } catch (err) {
    handleResponse(res, 500, err);
  }
};
