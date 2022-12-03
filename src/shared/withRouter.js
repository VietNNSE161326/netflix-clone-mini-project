import { useNavigate } from 'react-router';
import { useLocation } from "react-router";
import { useParams } from 'react-router-dom'
export const withRouter = (Component) => {
    const Wrapper = (props) => {
        const params = useParams();
        const location = useLocation();
        const history = useNavigate();
        return <Component  {...props} history={history} location={location} param={params} />
    }
    return Wrapper;
}