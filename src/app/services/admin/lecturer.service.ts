import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { Lecturer, LecturerRequest } from 'src/app/models/lecturer.model';

@Injectable({
  providedIn: 'root'
})
export class LecturerService {
  private apiUrl = 'https://your-api-url.com/lecturers';
  private lecturers: Lecturer[] = [
    {
      id: '101',
      name: 'Prof. Anderson',
      email: 'prof.anderson@university.edu',
      phone: '5551234567',
      assignedClasses: ['CS101', 'CS202'],
      credentials: {
        username: 'panderson',
        password: 'temp123'
      },
      status: 'active',
      createdAt: new Date('2023-01-15'),
      profilePictureUrl: 'https://example.com/profiles/anderson.jpg',
      department: 'Computer Science',
      allocatedStudents: 15,
      billingAmount: 12500
    }
  ];

  private lecturerRequests: LecturerRequest[] = [
    {
      id: '1',
      name: 'Dr. Smith',
      email: 'dr.smith@university.edu',
      phone: '1234567890',
      requestDate: new Date('2023-05-15'),
      status: 'pending'
    },
    {
      id: '2',
      name: 'Dr. Mutanga',
      email: 'dr.mutanga@university.edu',
      phone: '1234567890',
      requestDate: new Date('2023-05-15'),
      status: 'pending'
    }
  ];

  constructor(private http: HttpClient) { }

  getLecturerById(id: string): Observable<Lecturer> {
    // First check approved lecturers
    const lecturer = this.lecturers.find(l => l.id === id);
    if (lecturer) {
      return of(lecturer).pipe(delay(500));
    }

    // Then check pending requests (convert to Lecturer format)
    const request = this.lecturerRequests.find(r => r.id === id);
    if (request) {
      return of(this.convertRequestToLecturer(request)).pipe(delay(500));
    }

    return throwError(() => new Error('Lecturer not found'));
  }

  private convertRequestToLecturer(request: LecturerRequest): Lecturer {
    return {
      id: request.id || this.generateId(),
      name: request.name,
      email: request.email,
      phone: request.phone,
      assignedClasses: [],
      credentials: {
        username: request.email.split('@')[0],
        password: 'temp' + Math.random().toString(36).slice(-4)
      },
      status: 'active',
      createdAt: new Date(),
      department: 'Pending Assignment',
      allocatedStudents: 0,
      billingAmount: 0
    };
  }
 

  // For approved lecturers
  addLecturer(lecturer: Lecturer): Observable<Lecturer> {
    const newLecturer: Lecturer = {
      ...lecturer,
      id: this.generateId(),
      status: 'active',
      createdAt: new Date()
    };

    return of(newLecturer).pipe(
      delay(1000),
      tap(addedLecturer => this.lecturers.push(addedLecturer))
    );
  }

  // New method to approve requests
  approveRequest(request: LecturerRequest, classes: string[]): Observable<Lecturer> {
    const newLecturer: Lecturer = {
      id: this.generateId(),
      name: request.name,
      email: request.email,
      phone: request.phone,
      assignedClasses: classes,
      credentials: {
        username: request.email.split('@')[0],
        password: Math.random().toString(36).slice(-8)
      },
      status: 'active',
      createdAt: new Date()
    };

    return of(newLecturer).pipe(
      delay(1000),
      tap(lecturer => {
        this.lecturers.push(lecturer);
        // Remove from requests
        this.lecturerRequests = this.lecturerRequests.filter(r => r.id !== request.id);
      })
    );
  }

  // For existing lecturers
  suspendLecturer(lecturerId: string): Observable<void> {
    return of(undefined).pipe(
      delay(500),
      tap(() => {
        const lecturer = this.lecturers.find(l => l.id === lecturerId);
        if (lecturer) {
          lecturer.status = 'suspended';
        }
      }),
      map(() => {})
    );
  }

  resetPassword(lecturerId: string): Observable<string> {
  const tempPassword = Math.random().toString(36).slice(-8);
  // In a real app, you would call your API here
  return of(tempPassword).pipe(
    delay(500),
    tap(() => {
      // Update local data if needed
      const lecturer = this.lecturers.find(l => l.id === lecturerId);
      if (lecturer) {
        lecturer.credentials.password = tempPassword;
      }
    })
  );
}

  getLecturers(): Observable<Lecturer[]> {
    return of(this.lecturers).pipe(delay(500));
  }

  getLecturerRequests(): Observable<LecturerRequest[]> {
    return of(this.lecturerRequests).pipe(delay(500));
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }
  // In lecturer.service.ts

  toggleStatus(id: string): Observable<void> {
    const lecturer = this.lecturers.find(l => l.id === id);
    if (lecturer) {
      lecturer.status = lecturer.status === 'active' ? 'suspended' : 'active';
    }
    return of();
  }

  

reactivateLecturer(id: string): void {
  const lecturer = this.lecturers.find(l => l.id === id);
  if (lecturer) lecturer.status = 'active';
}

}
export { Lecturer };

