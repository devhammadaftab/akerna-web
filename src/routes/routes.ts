import { RoutesConstent } from 'constants/routes'
import Home from 'pages/home'

const routes = [{
    path: RoutesConstent.home,
    Component: Home,
    children: []
}, {
    path: RoutesConstent.notFound,
    Component: Home,
    children: []
}]

export default routes