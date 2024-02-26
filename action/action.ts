"use server";

import prisma from "@/prisma/client";
// import { revalidatePath } from "next/cache";

export async function createIssue(params: any) {
  const { title, description } = params;

  try {
    const data = await prisma.issue.create({
      data: { title: title, description: description },
    });

    // revalidatePath("/issues");
  } catch (error) {
    console.log(error);
  }
}
