export interface LecturerRequest {
  id?: string;
  name: string;
  email: string;
  phone: string;
  requestDate: Date;
  status: 'pending' | 'approved' | 'rejected';
}

export interface Lecturer {
  id: string;
  name: string;
  email: string;
  phone: string;
  assignedClasses: string[];
  credentials: {
    username: string;
    password: string;
  };
  status: 'active' | 'suspended';
  createdAt: Date;
   profilePictureUrl?: string;
  department?: string;
  allocatedStudents?: number;
  billingAmount?: number;
}


// Union type for when you need to handle both
export type AnyLecturer = LecturerRequest | Lecturer;