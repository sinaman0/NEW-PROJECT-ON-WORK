import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const arr = useRouteError();
    console.log(arr);
    
    return (
        <div>
            <h1>

                {arr.status} - {arr.statusText}
                <br />
                {arr.data}

            </h1>
        </div>
    );
};

export default ErrorPage;