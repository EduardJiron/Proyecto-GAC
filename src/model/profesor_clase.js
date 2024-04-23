const Clase = require('./clase.model');
const Profesor_clase = require('./profesor_clase.model');
const Profesor = require('./profesor.model');

Clase.belongsToMany(Profesor, { through: Profesor_clase, foreignKey: 'id_clase' ,as:'Profesores'} );
Profesor.belongsToMany(Clase, { through: Profesor_clase, foreignKey: 'id_profesor',as:'Clases' });

module.exports = { Clase, Profesor_clase, Profesor };
