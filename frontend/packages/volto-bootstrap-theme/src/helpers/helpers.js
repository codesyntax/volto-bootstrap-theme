// src/helpers/helpers.js
import find from 'lodash/find';

/**
 * Busca en un array de StyleDefinition la definición cuyo
 * estilo coincide con el del bloque, y devuelve su nombre.
 *
 * @param {Array<{name: string, style: object}>} styleDefinitions
 * @param {string} fieldName   Nombre de la propiedad en block.styles a buscar
 * @param {object} block       El objeto de datos del bloque
 * @returns {string|undefined} El name de la definición encontrada, o undefined
 */
export function getCurrentStyleByName(styleDefinitions, fieldName, block) {
  // bloque.styles[fieldName] puede venir, por ejemplo, 'grey' o '{ "--theme-color": "#ecebeb" }'
  const styleValue = block?.styles?.[fieldName];
  if (!styleValue) return undefined;
  // Busca la entrada donde style === styleValue
  const found = find(
    styleDefinitions,
    (def) => def.style === styleValue || JSON.stringify(def.style) === JSON.stringify(styleValue),
  );
  return found ? found.name : undefined;
}
