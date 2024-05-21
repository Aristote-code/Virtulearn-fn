export enum Roles {
  MENTOR = "mentor",
  STUDENT = "student",
}

export interface CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  profilePicture: string;
  isMentor: boolean;
}

export interface UserDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profilePicture: string;
  isMentor: boolean;
  token: string;
  _id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  courses: any[];
}

export interface formInputs {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPwd: string;
  role: Roles;
  pfp: File;
}

export interface AuthContextProps {
  user: UserDto | null;
  token: string | null;
  isLogged: boolean;
  login: ({ user, token }: { user: UserDto; token: string }) => void;
  logout: () => void;
}

export interface CreateBlogDto {
  title: string;
  content: string;
  coverImage: string;
}

export interface BlogDto {
  authorId: string;
  content: string;
  coverImage: string;
  createdAt: string;
  discussions: [];
  title: string;
  updatedAt: string;
  _id: string;
}

export interface BlogCardProps {
  authorId: UserDto;
  content: string;
  coverImage: string;
  createdAt: string;
  discussions: DiscussionDto[];
  title: string;
  updatedAt: string;
  _id: string;
}

export interface DiscussionDto {
  author: string;
  content: string;
  createdAt: string;
  _id: string;
}

export interface Content {
  title: string;
  message: string;
  link: string;
}

export interface CourseDto {
  _id: string;
  authorId: UserDto;
  title: string;
  description: string;
  coverImage: string;
  students: UserDto[];
  content: Content[];
  discussions: DiscussionDto[];
  createdAt: string;
}

export interface CreateCourseDto {
  title: string;
  description: string;
  coverImage: string;
  content: Content[];
}
