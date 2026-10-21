import type { ChangePersistence, ChangePublisher } from './ports.ts';

export async function executePrimary(
  changeId: string,
  persistence: ChangePersistence,
  publisher: ChangePublisher,
): Promise<void> {
  await persistence.save(changeId);
  await publisher.publish(changeId);
}

export async function executeAccelerated(
  changeId: string,
  persistence: ChangePersistence,
  publisher: ChangePublisher,
): Promise<void> {
  await publisher.publish(changeId);
  await persistence.save(changeId);
}
