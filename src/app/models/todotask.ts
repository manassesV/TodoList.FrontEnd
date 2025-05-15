export interface Todotask {
    id: number,
    name: string,
    description: string,
    dueDate: Date | null,
    status: boolean
}

export interface ApiResponse {
    value: Todotask[];
    isSuccess: boolean;
    isFailure: boolean;
    error: string;
  }

