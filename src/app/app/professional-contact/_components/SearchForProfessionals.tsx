"use client";
import { Professional } from "@/types/IProfessional";
import { Specialty } from "@/types/Specialty";
import { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
import Specialties from "./Specialties";
import ProfessionalList from "./ProfessionalList";
import replaceAccents from "@/utils/replaceAccents";
import setCookie from "@/utils/setCookie";

interface SearchForProfessionalsProps {
  professionals: Professional[];
}

const SearchForProfessionals = (props: SearchForProfessionalsProps) => {
  const [searchText, setSearchText] = useState("");
  const [specialty, setSpecialty] = useState<Specialty[]>([]);
  const [professionals, setProfessionals] = useState<Professional[]>([]);

  useEffect(() => {
    setProfessionals(() => {
      if (!searchText && !specialty.length) {
        return [];
      }

      return props.professionals.filter((professional) => {
        if (searchText) {
          const normalizedName = replaceAccents(
            professional.name.toLowerCase()
          );
          const normalizedSearchText = replaceAccents(searchText.toLowerCase());
          if (!normalizedName.includes(normalizedSearchText)) {
            return false;
          }
        }

        if (specialty.length && !specialty.includes(professional.specialty)) {
          return false;
        }

        return true;
      });
    });
  }, [props.professionals, searchText, specialty]);

  useEffect(() => {
    setCookie({ name: "schedule", value: "", maxAge: 0, path: "/" });
  });

  return (
    <>
      <SearchBar placeholder="Encontre especialista" onChange={setSearchText} />
      <Specialties onChange={setSpecialty} />
      <ProfessionalList professionals={professionals} />
    </>
  );
};

export default SearchForProfessionals;
