import { useContext, useEffect, useCallback } from "react";
import ModelsContext from "./ModelsContext";

export default function useModel(modelName: string) {
  const { registerModel, unregisterModel, getModelByName } =
    useContext(ModelsContext);

  useEffect(
    () => () => unregisterModel(modelName),
    [modelName, unregisterModel]
  );

  const getModel = useCallback(
    () => getModelByName(modelName),
    [modelName, getModelByName]
  );

  return {
    registerModel,
    getModel,
  };
}
