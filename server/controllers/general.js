import JsonData from "../models/JsonData.js";
const jsonFields = {
  end_year: "Number",
  intensity: "Number",
  sector: "String",
  topic: "String",
  insight: "String",
  url: "String",
  region: "String",
  start_year: "String",
  impact: "String",
  added: "Date",
  published: "Date",
  country: "String",
  relevance: "Number",
  pestle: "String",
  source: "String",
  title: "String",
  likelihood: "Number",
};

export const getJsonData = async (req, res) => {
  try {
    const { id } = req.params;
    const jsonData = await JsonData.findById(id);
    res.status(200).json(jsonData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllOfFields = async (req, res) => {
  const { field1, field2 } = req.query;
  try {
    const query = {};
    const selection = {};
    if (field1) {
      query[field1] =
        jsonFields[field1] === "String"
          ? { $ne: null, $not: /^$/ }
          : { $ne: null };
      selection[field1] = 1;
    }
    if (field2) {
      query[field2] =
        jsonFields[field2] === "String"
          ? { $ne: null, $not: /^$/ }
          : { $ne: null };
      selection[field2] = 1;
    }
    const allOfFields = await JsonData.find(query).select(selection);
    console.log(allOfFields.length);
    res.status(200).json(allOfFields);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
