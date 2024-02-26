import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ButtonCombo from "@/components/shared/butttonCombo";
import prisma from "@/prisma/client";
import IssueStatusBadge from "@/components/shared/IssueStatusBadge";
import Link from "next/link";

const IssuesPage = async () => {
  const data = await prisma.issue.findMany();
  return (
    <div className="w-full max-w-xl flex flex-col items-center">
      <ButtonCombo />
      <Table className="w-full mt-5">
        <TableCaption>A list of your recent Issues...</TableCaption>
        <TableHeader className="w-full">
          <TableRow>
            <TableHead className="w-[100px]">Issue</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">CreatedAt</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((issue) => (
            <TableRow key={issue.id}>
              <Link href={`/issues/${issue.id}`}>
                <TableCell className="font-medium">{issue.title}</TableCell>
              </Link>
              <TableCell>
                <IssueStatusBadge status={issue.status} />
              </TableCell>
              <TableCell className="text-right">
                {issue.createdAt.toDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default IssuesPage;
