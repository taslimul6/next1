function multiplyValue(value: number, multiplier: number = 2): number {
  return value * multiplier;
}

function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value ? "Active" : "Inactive";
  }
}

function formatCoordinate(
  coordinate: Readonly<[number, number, string]>,
): string {
  const [latitude, longitude, locationName] = coordinate;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];

  for (const array of arrays) {
    for (const item of array) {
      result.push(item);
    }
  }

  return result;
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  const result = courses.filter((course) => {
    return course.isPublished === true && course.students >= minStudents;
  });

  return result;
}



function pluckValues<T>(items: T[], key: keyof T): T[keyof T][] {
  return items.map((item) => item[key]);
}



class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
 

  constructor(name: string, baseSalary: number,  private department: string) {
    super(name, baseSalary);
    
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}




function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }

    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);
  });
}




