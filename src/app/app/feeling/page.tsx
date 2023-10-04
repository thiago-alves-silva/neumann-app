import { Metadata } from "next";
import FeelingForm from "./_components/FeelingForm";

export const metadata: Metadata = {
  title: "Sentimentos",
};

const AppFeeling = () => {
  return <FeelingForm />;
};

export default AppFeeling;
