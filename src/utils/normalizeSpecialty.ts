import { Specialty } from "@/types/Specialty";

const normalizeSpecialty = (specialty: Specialty) => {
  switch (specialty) {
    case "psychologist":
      return "Psicólogo";
    case "pedagogue":
      return "Pedagogo";
    case "speech_therapist":
      return "Fonoaudiólogo";
    case "psychopedagogue":
      return "Psicopedagogo";
    case "psychiatrist":
      return "Psiquiatra";
    case "pediatrician":
      return "Pediatra";
    case "psychoanalyst":
      return "Psicanalista";
    case "otolaryngologist":
      return "Otorrino";
    case "teacher":
      return "Professor";
    default:
      return specialty;
  }
};

export default normalizeSpecialty;
