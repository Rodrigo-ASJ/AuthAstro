// el nombre .json indica que tipo de dato tiene que devolver
import type { APIRoute } from 'astro';
import voteInfo from '../../data/editions-vote.json';

const DEFAULT_CATEGORY_PARAM = '0';

export const GET: APIRoute = ({ request }) => {
	const { url } = request;
	const searchParams = new URL(url).searchParams; //query de busqueda

	const category = Number(searchParams.get('category') ?? DEFAULT_CATEGORY_PARAM);
	//se transforma a numbero porque siempre el serch param devuelve una cadena de texto
	//si es null y evitar que pete, se pasa un 1

    const categoryInfo = voteInfo[category]

	return new Response(JSON.stringify(categoryInfo));
};
