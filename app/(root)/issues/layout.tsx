import React from "react";

const IssueLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full flex flex-col items-center">{children}</div>;
};

export default IssueLayout;
