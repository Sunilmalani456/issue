import React from "react";
import { Badge } from "@/components/ui/badge";
import { Status } from "@prisma/client";

interface Props {
  status: Status;
  className?: string;
}

const statusMap: Record<
  Status,
  { lable: string; color: "bg-green-500" | "bg-red-500" | "bg-yellow-500" }
> = {
  OPEN: { lable: "Open", color: "bg-green-500" },
  CLOSED: { lable: "Closed", color: "bg-red-500" },
  IN_PROGRESS: { lable: "In Progress", color: "bg-yellow-500" },
};

const IssueStatusBadge = ({ status, className }: Props) => {
  return (
    <Badge
      variant={"outline"}
      className={`${statusMap[status].color} text-white`}
    >
      {statusMap[status].lable}
    </Badge>
  );
};

export default IssueStatusBadge;
