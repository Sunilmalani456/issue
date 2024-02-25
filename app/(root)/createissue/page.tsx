import ButtonCombo from "@/components/shared/butttonCombo";
import IssueForm from "@/components/shared/issue-form";

const CreateIssuePage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <ButtonCombo />
      <h2>Create Issue</h2>

      <IssueForm />
    </div>
  );
};

export default CreateIssuePage;
