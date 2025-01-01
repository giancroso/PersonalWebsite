import * as React from "react";

interface TitleContextType {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const TitleContext = React.createContext<TitleContextType>({
  title: "",
  setTitle: () => {},
});
export const useTitle = () => React.useContext(TitleContext);

export const TitleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [title, setTitle] = React.useState<string>("");

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};
