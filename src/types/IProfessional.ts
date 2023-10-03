import { Specialty } from "./Specialty";

export interface Professional {
  _id: string;
  name: string;
  specialty: Specialty;
  available_dates: string[]; // datas em formato JSON
  url_image?: string;
}
