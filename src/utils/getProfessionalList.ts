import { PROFESSIONALS_GET } from "@/api";
import { Professional } from "@/types/IProfessional";

const getProfessionalList = async () => {
  const { url, options } = PROFESSIONALS_GET();
  const response = await fetch(url, options);

  if (response.ok) {
    return (await response.json()) as Professional[];
  }

  return [];
};

export default getProfessionalList;
