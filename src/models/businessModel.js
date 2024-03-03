import mongoose from "mongoose";
const businessSchema = mongoose.Schema({
  companyName: {
    type: "string",
    required: [true, "please enter a company name"],
  },

  businessEmail: {
    type: "string",
    required: [true, "please enter a business"],
  },

  domain: {
    type: "string",
    required: [true, "please enter a domain"],
  },

  partof_franchise: {
    type: "string",
    required : false
  },

  country: {
    type: "string",
    required : false
  },

  city: {
    type: "string",
    required: false,
  },

  state: {
    type: "string",
    required :false
  },

  postalCode: {
    type: "string",
    required: false,
  },

  currency: {
    type: "string",
    required: false,
  },

  headquater_address: {
    type: "string",
    required: false,
  },

  number: {
    type: "string",
    required: false,
  },
});

const BusinessModel = mongoose.models.Bussiness || mongoose.model("Business", businessSchema);
export default BusinessModel;
