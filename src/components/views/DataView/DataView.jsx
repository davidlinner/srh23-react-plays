import View from "../View/View.jsx";
import {fetchProducts} from "../../../data/products.js";
import {FormattedNumber} from "react-intl";
import useSWR from "swr";

function DataView() {

    // documentation for the products api here: https://dummyjson.com/docs/products
    const { data, error, isLoading } = useSWR('/products', fetchProducts(10))


    return (
        <View>
            {isLoading && <p>Please wait while data are being fetched ...</p>}
            {isLoading || <ul>
                {data.products.map(({id, title, price}) =>
                        <li key={id}>
                            <div>{title}, <em><FormattedNumber value={price} currency={'EUR'} maximumFractionDigits={2}  minimumFractionDigits={2}/></em></div>
                        </li>
                )}
            </ul>}
            {error && <p style={{'color':'red'}}>Loading data failed.</p>}
        </View>
    );
}

export default DataView;