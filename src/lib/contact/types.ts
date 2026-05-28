export type ContactFormPayload = {
  name: string;
  company?: string;
  phone?: string;
  email: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  postal?: string;
  country?: string;
  contactByPhone?: "yes" | "no";
  message?: string;
  website?: string;
};
