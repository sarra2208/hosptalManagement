import { Department } from "../departement-management/departement";

export interface Stuff {
  id: string;
  nom: string;
  prenom: string;
  role: string;
  email: string;
  telephone: string;
  adresse: string;
  hireDate: string; // ISO format string (e.g., '2024-05-10')
  service?: Department;
}
