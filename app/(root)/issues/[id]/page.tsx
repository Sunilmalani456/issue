import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import IssueDetailsPage from "./_components/issuedetailspage";
import IssueDetailsButton from "./_components/issuedetailsbutton";

const IssuesIdPage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) notFound();

  return (
    <div className="w-full grid sm:grid-cols-3 gap-3">
      <IssueDetailsPage issue={issue} />
      <div className="flex sm:justify-end">
        <IssueDetailsButton issueId={issue.id} />
      </div>
    </div>
  );
};

export default IssuesIdPage;
