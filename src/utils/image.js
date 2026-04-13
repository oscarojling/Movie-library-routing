export const getImageURL = (imageParamater) => {
  return new URL(`../assets/images/${imageParamater}`, import.meta.url).href;
};
