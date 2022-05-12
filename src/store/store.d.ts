export type ChangeMemActionType = "up-mem" | "down-mem";

export interface ChangeMemPayload {
  type: ChangeMemActionType;
  id: number;
}
