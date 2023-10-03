import { Professional } from "@/types/IProfessional";
import { Specialty } from "@/types/Specialty";

export const GET = async () => {
  const getRandomImages = async () => {
    const response = await fetch("https://picsum.photos/64", {
      cache: "no-store",
    });

    return response.url;
  };
  getRandomImages();
  const getRandomDate = (incrementDays: number) => {
    const today = new Date();
    const hours = [8, 9, 10, 11, 14, 15, 16, 17];
    const randomHour = hours[Math.round(Math.random() * (hours.length - 1))];
    const randomDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + incrementDays,
      randomHour,
      0,
      0,
      0
    );

    return randomDate.toJSON();
  };
  const specialties: Specialty[] = [
    "psychologist",
    "pedagogue",
    "speech_therapist",
    "psychopedagogue",
    "psychiatrist",
    "pediatrician",
    "psychoanalyst",
    "otolaryngologist",
    "teacher",
  ];
  const images = await Promise.all(
    Array.from({ length: 16 }, () => getRandomImages())
  );

  const professionals = Array.from({ length: 16 }, (_, index) => {
    const value: Professional = {
      _id: "",
      name: "Profissional",
      available_dates: [],
      specialty: specialties[0],
    };
    const randomDay = Math.round(Math.random() * 6) + 1;
    const randomDates = Array.from({ length: 4 }, () =>
      getRandomDate(randomDay)
    )
      .reduce((acc: string[], date) => {
        if (!acc.includes(date)) {
          acc.push(date);
        }

        return acc;
      }, [])
      .sort((a, b) => Date.parse(a) - Date.parse(b));

    value._id = crypto.randomUUID();
    value.name += ` ${index + 1}`;
    value.specialty =
      specialties[Math.round(Math.random() * (specialties.length - 1))];
    value.available_dates.push(...randomDates);
    value.url_image = images[index];

    return value;
  });

  return new Response(JSON.stringify(professionals), { status: 200 });
};
