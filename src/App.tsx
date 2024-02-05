import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {Root} from './view/components/root';
import {Provider} from 'react-redux';
import {store} from './store';
import {UseCaseProvider} from "./contexts/UseCaseContext";
import {ProductPageContainer} from "./view/components/product-page";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
    },
    {
        path: '/products/:productId',
        element: <ProductPageContainer/>,
    },
]);

function App() {
    return (
        <UseCaseProvider>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </UseCaseProvider>
    );
}

export default App;
