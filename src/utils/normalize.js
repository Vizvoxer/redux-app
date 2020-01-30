import keyBy from "lodash.keyby";

export function normalize(data) {
  const dataById = keyBy(data, ({ id }) => id);
  const allIds = Object.keys(dataById);
  return {
    byId: dataById,
    allIds
  };
}
