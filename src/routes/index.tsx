import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import { useStore } from 'store/index';
import routes from './routes';
import { getDrinks, setUser } from 'store/actions';

const Routes: React.FC = () => {

    const [routeComponent, setRouteComponent] = useState<React.ReactElement[]>([]);
    const { state, dispatch } = useStore();

    useEffect(() => {
        let newRouteComponent: React.ReactElement[] = []
        const getRoute = (routes?: any, path?: string) => {
            for(let i=0; i < routes.length; i++) {
                let route = routes[i];
                let Component = route.Component;
                let newpath = path ? path + route.path : route.path;
                if (Component) {
                    newRouteComponent.push(<Route key={newpath} path={newpath} element={<Component />} />);
                }
                if(route.children.length) {
                    getRoute(route.children, newpath);
                }
            }
        }
        initialize();
        getRoute(routes);
        setRouteComponent(newRouteComponent);
    }, [])

    const initialize = async () => {
        dispatch(await setUser());
        dispatch(await getDrinks());
    }

    return <BrowserRouter>
        <Router>
            {routeComponent}
        </Router>
    </BrowserRouter>
}

export default Routes;