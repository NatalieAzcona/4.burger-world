/* //Crea una función que “construya” una hamburguesa objetivo.
Esa función debe tomar la lista base de ingredientes del proyecto.
Debe separar los panes (bun-top y bun-bottom) del resto de ingredientes.
Debe generar una cantidad aleatoria de capas internas (por ejemplo entre 2 y 5).
Para cada capa interna, elegir un ingrediente al azar de los que no son pan.
Al final, devolver un array con este orden:
pan superior
capas aleatorias del medio
pan inferior
Exporta esa función para poder usarla desde Play o OrderTicket. */
 
import { ingredients } from "../data/ingredients"



const buildHamburger = (layer) => {
 
    const randomArray = [ingredients[0], ...ingredients, ingredients[ingredients.length - 1]]

    const ticketBurger = ingredients.map((i) => Math.random(i))

    ticketBurger[0] = ingredients[0]
      
    return [ingredients[0], ...randomLayers, ingredients[ingredients.length - 1]]
} 