import { Clinic } from "../clinic-management/clinic";

export interface Department {
  id?: string;
  name: string;
  description: string;
  clinic: Clinic; // Optional, comes when fetched
}