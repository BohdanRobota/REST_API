import { Dog } from "../models/Dog.model";

const dogs = [
  { name: "Neo", color: "red&amber", tailLength: 22, weight: 32 },
  { name: "Jessy", color: "black&white", tailLength: 7, weight: 14 },
  { name: "Caligula", color: "red&amber", tailLength: 17, weight: 23 },
  { name: "Micheal", color: "black&white", tailLength: 11, weight: 34 },
  { name: "Bruno", color: "red&amber", tailLength: 23, weight: 12 },
  { name: "Ville", color: "black&white", tailLength: 5, weight: 27 },
  { name: "Petrus", color: "red&amber", tailLength: 7, weight: 22 },
  { name: "Edyta", color: "black&white", tailLength: 29, weight: 36 },
  { name: "Laila", color: "red&amber", tailLength: 4, weight: 15 },
  { name: "Tomiris", color: "black&white", tailLength: 16, weight: 18 },
]
export const populateDb = async () => {
  const result = await Dog.findAndCountAll();
  if (result.count === 0) {
    dogs.forEach(async (dog) => {
      await Dog.create(dog);
    })
  }
}