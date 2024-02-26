import { Button } from "@/components/ui/button";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

interface IssueDetailsButtonProps {
  issueId: number;
}

const IssueDetailsButton = ({ issueId }: IssueDetailsButtonProps) => {
  return (
    <Link href={`/issue/${issueId}/edit`}>
      <Button size="sm" className="flex justify-center items-center">
        <Pencil2Icon className="w-4 h-4" />
        <p className="ml-2">Edit</p>
      </Button>
    </Link>
  );
};

export default IssueDetailsButton;
