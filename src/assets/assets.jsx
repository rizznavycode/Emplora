export const DEPARTMENTS = ["Engineering", "Human Resources", "Marketing", "Sales", "Finance", "Operations", "IT Support", "Customer Success", "Product Management", "Design"];

export const dummyAdminDashboardData = {
    role: "ADMIN",
    totalEmployees: 3,
    totalDepartments: 10,
    todayAttendance: 1,
    pendingLeaves: 1,
};

export const dummyEmployeeDashboardData = {
    currentMonthAttendance: 20,
    pendingLeaves: 2,
    latestPayslip: {
        netSalary: 2000,
    },
    employee: {
        firstName: "John",
        lastName: "Doe",
        position: "Software Engineer",
        department: "Engineering",
    },
};

export const dummyProfileData = {
    _id: "69b411e6f8a807df391d7b13",
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    image: null,
};

export const dummyEmployeeData = [
    {
        _id: "69b414a7f8a807df391d7b58",
        userId: {
            _id: "69b414a7f8a807df391d7b56",
            email: "david@example.com",
            role: "EMPLOYEE",
        },
        department: "IT Support",
        firstName: "David",
        lastName: "Michael",
        email: "david@example.com",
        phone: "9000000001",
        position: "Associate Business Support",
        basicSalary: 1000,
        allowances: 100,
        deductions: 9.98,
        employmentStatus: "ACTIVE",
        joinDate: "2000-01-20T00:00:00.000Z",
        image: null,
        isDeleted: false,
        bio: "",
        createdAt: "2026-03-13T13:44:07.806Z",
        updatedAt: "2026-03-13T13:44:07.806Z",
        id: "69b414a7f8a807df391d7b58",
        user: {
            email: "david@example.com",
            role: "EMPLOYEE",
        },
    },
    {
        _id: "69b41439f8a807df391d7b52",
        userId: {
            _id: "69b41439f8a807df391d7b50",
            email: "alex@example.com",
            role: "EMPLOYEE",
        },
        department: "Engineering",
        firstName: "Alex",
        lastName: "Matthew",
        email: "alex@example.com",
        phone: "9000000001",
        position: "Software Developer",
        basicSalary: 2000,
        allowances: 100,
        deductions: 20,
        employmentStatus: "ACTIVE",
        joinDate: "2000-01-20T00:00:00.000Z",
        image: null,
        isDeleted: false,
        bio: "",
        createdAt: "2026-03-13T13:42:17.589Z",
        updatedAt: "2026-03-13T13:42:17.589Z",
        id: "69b41439f8a807df391d7b52",
        user: {
            email: "alex@example.com",
            role: "EMPLOYEE",
        },
    },
    {
        _id: "69b411e6f8a807df391d7b13",
        userId: {
            _id: "69b411e5f8a807df391d7b11",
            email: "johndoe@example.com",
            role: "EMPLOYEE",
        },
        department: "Engineering",
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        phone: "9000000001",
        position: "Senior Software Developer",
        basicSalary: 40000,
        allowances: 10000,
        deductions: 2000,
        employmentStatus: "ACTIVE",
        joinDate: "2000-01-20T00:00:00.000Z",
        image: null,
        isDeleted: false,
        bio: "Hi, I am dev a full stack web developer",
        createdAt: "2026-03-13T13:32:22.013Z",
        updatedAt: "2026-03-13T13:33:20.498Z",
        id: "69b411e6f8a807df391d7b13",
        user: {
            email: "johndoe@example.com",
            role: "EMPLOYEE",
        },
    },
];

export const dummyLeaveData = [
    {
        _id: "69b4165af8a807df391d7bfd",
        employeeId: "69b41439f8a807df391d7b52",
        type: "ANNUAL",
        startDate: "2026-03-27T00:00:00.000Z",
        endDate: "2026-03-29T00:00:00.000Z",
        reason: "Out for a trip",
        status: "APPROVED",
        createdAt: "2026-03-13T13:51:22.716Z",
        updatedAt: "2026-03-13T13:51:43.139Z",
        id: "69b4165af8a807df391d7bfd",
        employee: dummyEmployeeData[0],
    },
    {
        _id: "69b4163cf8a807df391d7bf8",
        employeeId: "69b41439f8a807df391d7b52",
        type: "CASUAL",
        startDate: "2026-03-23T00:00:00.000Z",
        endDate: "2026-03-24T00:00:00.000Z",
        reason: "Going For Vacations ",
        status: "REJECTED",
        createdAt: "2026-03-13T13:50:52.117Z",
        updatedAt: "2026-03-13T13:51:46.450Z",
        id: "69b4163cf8a807df391d7bf8",
        employee: dummyEmployeeData[1],
    },
    {
        _id: "69b415fcf8a807df391d7be0",
        employeeId: "69b411e6f8a807df391d7b13",
        type: "CASUAL",
        startDate: "2026-03-27T00:00:00.000Z",
        endDate: "2026-03-28T00:00:00.000Z",
        reason: "Going to visit a temple",
        status: "PENDING",
        createdAt: "2026-03-13T13:49:48.618Z",
        updatedAt: "2026-03-13T13:51:44.251Z",
        id: "69b415fcf8a807df391d7be0",
        employee: [dummyEmployeeData[2]],
    },
    {
        _id: "69b415dff8a807df391d7bdb",
        employeeId: "69b411e6f8a807df391d7b13",
        type: "SICK",
        startDate: "2026-03-15T00:00:00.000Z",
        endDate: "2026-03-16T00:00:00.000Z",
        reason: "I had a fracture on leg",
        status: "APPROVED",
        createdAt: "2026-03-13T13:49:19.204Z",
        updatedAt: "2026-03-13T13:51:45.418Z",
        id: "69b415dff8a807df391d7bdb",
        employee: dummyEmployeeData[0],
    },
];

export const dummyPayslipData = [
    {
        _id: "69b41595f8a807df391d7baa",
        employeeId: "69b411e6f8a807df391d7b13",
        month: 2,
        year: 2026,
        basicSalary: 2000,
        allowances: 200,
        deductions: 20,
        netSalary: 2180,
        createdAt: "2026-03-13T13:48:05.653Z",
        updatedAt: "2026-03-13T13:48:05.653Z",
        id: "69b41595f8a807df391d7baa",
        employee: dummyEmployeeData[0],
    },
    {
        _id: "69b41536f8a807df391d7b9c",
        employeeId: "69b41439f8a807df391d7b52",
        month: 2,
        year: 2026,
        basicSalary: 2000,
        allowances: 200,
        deductions: 20,
        netSalary: 2180,
        createdAt: "2026-03-13T13:46:30.804Z",
        updatedAt: "2026-03-13T13:46:30.804Z",
        id: "69b41536f8a807df391d7b9c",
        employee: dummyEmployeeData[1],
    },
    {
        _id: "69b41526f8a807df391d7b98",
        employeeId: "69b414a7f8a807df391d7b58",
        month: 2,
        year: 2026,
        basicSalary: 1000,
        allowances: 100,
        deductions: 10,
        netSalary: 1090,
        createdAt: "2026-03-13T13:46:14.884Z",
        updatedAt: "2026-03-13T13:46:14.884Z",
        id: "69b41526f8a807df391d7b98",
        employee: dummyEmployeeData[2],
    },
    {
        _id: "69b41515f8a807df391d7b94",
        employeeId: "69b411e6f8a807df391d7b13",
        month: 1,
        year: 2026,
        basicSalary: 1000,
        allowances: 200,
        deductions: 20,
        netSalary: 1180,
        createdAt: "2026-03-13T13:45:57.132Z",
        updatedAt: "2026-03-13T13:45:57.132Z",
        id: "69b41515f8a807df391d7b94",
        employee: dummyEmployeeData[0],
    },
    {
        _id: "69b414fbf8a807df391d7b90",
        employeeId: "69b41439f8a807df391d7b52",
        month: 1,
        year: 2026,
        basicSalary: 2000,
        allowances: 100,
        deductions: 10,
        netSalary: 2090,
        createdAt: "2026-03-13T13:45:31.899Z",
        updatedAt: "2026-03-13T13:45:31.899Z",
        id: "69b414fbf8a807df391d7b90",
        employee: dummyEmployeeData[1],
    },
    {
        _id: "69b414e5f8a807df391d7b8c",
        employeeId: "69b414a7f8a807df391d7b58",
        month: 1,
        year: 2026,
        basicSalary: 2000,
        allowances: 100,
        deductions: 10,
        netSalary: 2090,
        createdAt: "2026-03-13T13:45:09.169Z",
        updatedAt: "2026-03-13T13:45:09.169Z",
        id: "69b414e5f8a807df391d7b8c",
        employee: dummyEmployeeData[2],
    },
];

export const dummyAttendanceData = [
    {
        _id: "69b68d19f4437fdd254d5a68",
        employeeId: "69b411e6f8a807df391d7b13",
        date: "2026-03-14T18:30:00.000Z",
        checkIn: "2026-03-15T10:42:33.966Z",
        checkOut: "2026-03-15T18:42:37.476Z",
        status: "PRESENT",
        workingHours: 8,
        dayType: "Full Day",
        createdAt: "2026-03-15T10:42:33.973Z",
        updatedAt: "2026-03-15T10:42:37.479Z",
    },
    {
        _id: "69b415b9f8a807df391d7bcc",
        employeeId: "69b411e6f8a807df391d7b13",
        date: "2026-03-12T18:30:00.000Z",
        checkIn: "2026-03-13T13:48:41.416Z",
        checkOut: "2026-03-13T21:48:42.430Z",
        status: "PRESENT",
        workingHours: 8,
        dayType: "Full Day",
        createdAt: "2026-03-13T13:48:41.418Z",
        updatedAt: "2026-03-13T13:48:42.433Z",
    },
];


export function getWorkingHoursDisplay(record) {
    if (record.workingHours != null) {
        const hrs = Math.floor(record.workingHours);
        const mins = Math.round((record.workingHours - hrs) * 60);
        return `${hrs}h ${mins}m`;
    }
    // If still checked in (no checkout), compute live hours
    if (record.checkIn && !record.checkOut) {
        const diffMs = Date.now() - new Date(record.checkIn).getTime();
        const diffHours = diffMs / (1000 * 60 * 60);
        const hrs = Math.floor(diffHours);
        const mins = Math.round((diffHours - hrs) * 60);
        return `${hrs}h ${mins}m (ongoing)`;
    }
    return "—";
}

export function getDayTypeDisplay(record) {
    if (record.dayType) {
        const map = {
            "Full Day": "badge-success",
            "Three Quarter Day": "bg-blue-100 text-blue-700",
            "Half Day": "badge-warning",
            "Short Day": "badge-danger",
        };
        return {
            label: record.dayType,
            className: map[record.dayType] || "bg-slate-100 text-slate-600",
        };
    }
    if (record.checkIn && !record.checkOut) {
        return { label: "In Progress", className: "bg-indigo-100 text-indigo-700" };
    }
    return { label: "—", className: "" };
}