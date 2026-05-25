export type AdminContactSubmission = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  company: string | null;
  industry: string | null;
  message: string;
  source_page: string | null;
  status: "new" | "reviewed" | "closed";
};

export type AdminDiscoveryCallBooking = {
  id: string;
  created_at: string;
  starts_at: string;
  name: string;
  email: string;
  company: string | null;
  notes: string | null;
  status: "booked" | "cancelled";
};

export type AdminDashboardPayload = {
  contacts: AdminContactSubmission[];
  bookings: AdminDiscoveryCallBooking[];
};
