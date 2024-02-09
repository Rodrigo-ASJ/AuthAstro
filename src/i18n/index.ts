import catalan from "./ca.json"
import spanish from "./es.json"

const LANGUAGES = { 
    CATALAN : 'ca',
    SPANISH: 'es'
}
export const getI18N = ({ currentLocale = 'es' }: { currentLocale?: String | undefined }) =>{
    /* switch (currentLocale){
        case LANGUAGES.CATALAN: 
            return catalan;
        case LANGUAGES.ESPANISH:
            return spanish;   
        default: 
        return spanish;        
    } */

    if( LANGUAGES.CATALAN === currentLocale )return catalan;
    if( LANGUAGES.SPANISH === currentLocale )return spanish;
    return spanish
    


}