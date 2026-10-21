import type { ChangePersistence, ChangePublisher } from './ports.ts';
import { executeAccelerated } from './workflow.ts';

export async function publishCommittedChange(
  changeId: string,
  persistence: ChangePersistence,
  publisher: ChangePublisher,
): Promise<boolean> {
  try {
    await executeAccelerated(changeId, persistence, publisher);
    return true;
  } catch {
    return false;
  }
}
