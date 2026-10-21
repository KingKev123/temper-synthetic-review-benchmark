export interface ChangePersistence {
  save(changeId: string): Promise<void>;
}

export interface ChangePublisher {
  // A subscriber may immediately load the committed change by ID.
  publish(changeId: string): Promise<void>;
}
