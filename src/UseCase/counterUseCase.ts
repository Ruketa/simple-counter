import { Counter } from "@/Domain/Counter";

export interface CounterUseCase {
  fethArticles(): Promise<Counter>
}