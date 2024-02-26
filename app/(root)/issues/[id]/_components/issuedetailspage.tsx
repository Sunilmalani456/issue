import IssueStatusBadge from "@/components/shared/IssueStatusBadge";
import { Issue } from "@prisma/client";
import React from "react";
import ReactMarkdown from "react-markdown";

interface IssueDetailsPageProps {
  issue: Issue;
}

const IssueDetailsPage = ({ issue }: IssueDetailsPageProps) => {
  return (
    <main className="w-full col-span-2 flex flex-col gap-2 px-auto">
      <div>
        <p className="text-xs text-slate-500">
          {issue.createdAt.toDateString().slice(3)}
        </p>
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Title: {issue.title}</h1>
          <IssueStatusBadge className="" status={issue.status} />
        </div>
      </div>
      <div className="w-full flex justify-center mt-4">
        <ReactMarkdown className="w-full prose rounded-sm px-2.5 py-2.5 border bg-card text-card-foreground shadow">
          {issue.description}
        </ReactMarkdown>
      </div>
    </main>
  );
};

export default IssueDetailsPage;
