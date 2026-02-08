export interface User {
  id: string;
  username: string;
  password: string;
  joinDate: string;
}

export interface Vote {
  id: string;
  creatorId: string;
  question: string;
  options: string[];
  hasOther: boolean;
  selectionType: 'fixed' | 'multiple';
  selectionCount?: number;
  deadline?: string;
  createdAt: string;
  responses: VoteResponse[];
}

export interface VoteResponse {
  userId: string;
  selectedOptions: number[];
  otherText?: string;
  timestamp: string;
}

// 메모리 기반 저장소 (Vercel 배포용)
let usersData: User[] = [];
let votesData: Vote[] = [];

export function getUsers(): User[] {
  return usersData;
}

export function saveUsers(users: User[]): void {
  usersData = users;
}

export function getVotes(): Vote[] {
  return votesData;
}

export function saveVotes(votes: Vote[]): void {
  votesData = votes;
}
