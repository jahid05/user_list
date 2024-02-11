import { RevolvingDot } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <RevolvingDot
        height="150"
        width="150"
        radius="20"
        color="#1B9C85"
        secondaryColor=""
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperclassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;