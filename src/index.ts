import type { ChangePersistence, ChangePublisher } from './ports.ts';
import { executePrimary } from './workflow.ts';

export async function publishCommittedChange(
  changeId: string,
  persistence: ChangePersistence,
  publisher: ChangePublisher,
): Promise<boolean> {
  try {
    await executePrimary(changeId, persistence, publisher);
    return true;
  } catch {
    return false;
  }
}
