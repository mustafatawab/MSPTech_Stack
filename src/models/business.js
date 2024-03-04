import mongoose from "mongoose";

const businessContact = mongoose.Schema({
  companyName: {
    type: String,
    required: [true, "Please enter a company name"],
  },
  businessEmail: {
    type: String,
    required: [true, "Please enter a business email"],
    unique: true,
  },
  domain: {
    type: String,
    required: [true, "Please enter a domain"],
    unique: true,
  },
  partof_franchise: {
    type: String,
    required: false,
  },
  country: {
    type: String,
  },
  city: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  postalCode: {
    type: String,
    required: false,
  },
  currency: {
    type: String,
    required: false,
  },
  headquater_address: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
});

const businessModelSchema = mongoose.Schema({
  model: {
    type: String,
  },
  classification: {
    type: String,
    required: true,
  },
});

const businessSchema = mongoose.Schema({
  businessContact: businessContact,
  businessModel: businessModelSchema,
});

const Business =
  mongoose.models.Business || mongoose.model("Business", businessSchema);
  
export default Business;
