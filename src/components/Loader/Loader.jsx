import { Oval } from "react-loader-spinner";

export const Loader = ({loading}) => {
    return (
        <div>
            <Oval
            height={280}
            width={280}
            color="#1c0792"
            visible={loading}
            ariaLabel='oval-loading'
            secondaryColor="#2235a3"
            strokeWidth={2}
                strokeWidthSecondary={2}
                wrapperClass="Loader"
            />
        </div>
    );
};