import { TailSpin } from "react-loader-spinner";
import { FallBackContainer } from "../../Style/FallBackContainer.styled";

export const Loader = () => {
  return (
    <FallBackContainer>
      <TailSpin ariaLabel="loading-indicator" color="blue" />
    </FallBackContainer>
  );
};
