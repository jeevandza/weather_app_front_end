import { ProviderWeatherContext, ProvideSnackbarContext } from "./index";

export const ContextWrapper = ({ children }) => {
  return (
    <ProvideSnackbarContext>
      <ProviderWeatherContext>{children}</ProviderWeatherContext>
    </ProvideSnackbarContext>
  );
};
