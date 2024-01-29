"use server";
import { getWeatherData } from "@/app/_api/api";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const fetchWeatherData = async (formData: FormData) => {
  const city = formData.get("city");
  if (!city) {
    return "Lviv";
  }
  redirect(`/?city=${city}`);
};
