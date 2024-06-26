export type BodyType = "suv" | "estate" | "sedan";

export type ModelType = "plug-in hybrid" | "pure electric";

export type CarType = {
  id: "string";
  modelName: "string";
  bodyType: BodyType;
  modelType: ModelType;
  imageUrl: "string";
};
