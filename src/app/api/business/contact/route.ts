import { NextResponse, NextRequest } from "next/server";
import { Connect } from "@/lib/dbConfig";
import BusinessModel from "@/models/businessModel";

Connect();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      companyName,
      businessEmail,
      domain,
      partof_franchise,
      country,
      city,
      state,
      postalCode,
      currency,
      headquater_address,
      phoneNumber,
    } = body;

    console.log(body);

    const business = new BusinessModel({
      companyName,
      businessEmail,
      domain,
      partof_franchise,
      country,
      city,
      state,
      postalCode,
      currency,
      headquater_address,
      phoneNumber,
    });

    const savedBusiness = await business.save();

    return NextResponse.json({
      message: "Added Business Contact Details",
      savedBusiness,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
    });
  }
}
